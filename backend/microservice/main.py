from concurrent import futures
import logging

import gen.helloworld_pb2 as helloworld_pb2
import gen.helloworld_pb2_grpc as helloworld_pb2_grpc
import grpc

import gen.face_analyzer_pb2 as fapb2
import gen.face_analyzer_pb2_grpc as fapb2_grpc

from face_analyzer import FaceAnalyzer as FaceAnalyzerService


class Greeter(helloworld_pb2_grpc.GreeterServicer):

    def SayHello(self, request, context):
        return helloworld_pb2.HelloReply(message=f"Hello, {request.name}!")

    def SayHelloAgain(self, request, context):
        return helloworld_pb2.HelloReply(message=f"Hello again, {request.name}!")


class FaceAnalyzer(fapb2_grpc.FaceAnalysisServicer):

    def __init__(self, face_analyzer: FaceAnalyzerService):
        self.face_analyzer: FaceAnalyzerService = face_analyzer

    def AnalyzeFace(self, request: fapb2.AnalyzeFaceRequest, context):
        result = self.face_analyzer.analyze(request.base64String)
        response: fapb2.AnalyzeFaceResponse = fapb2.AnalyzeFaceResponse(**result)
        return response


def serve():
    face_analyzer_service = FaceAnalyzerService()
    port = "50051"
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    helloworld_pb2_grpc.add_GreeterServicer_to_server(Greeter(), server)
    fapb2_grpc.add_FaceAnalysisServicer_to_server(
        FaceAnalyzer(face_analyzer_service), server
    )

    server.add_insecure_port("[::]:" + port)
    server.start()
    print("Server started, listening on " + port)
    server.wait_for_termination()


if __name__ == "__main__":
    logging.basicConfig()
    serve()
