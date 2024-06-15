from concurrent import futures
import logging

import grpc

import gen.face_analyzer_pb2 as fapb2
import gen.face_analyzer_pb2_grpc as fapb2_grpc

from face_analyzer import FaceAnalyzer as FaceAnalyzerService


class FaceAnalyzer(fapb2_grpc.FaceAnalysisServicer):

    def __init__(self, face_analyzer: FaceAnalyzerService):
        self.face_analyzer: FaceAnalyzerService = face_analyzer

    def AnalyzeFace(
        self, request: fapb2.AnalyzeFaceRequest, context: grpc.ServicerContext
    ):
        # for testing purposes ovveride the base64String with one from reuqest
        base64String = request.base64String
        logging.info("dupa")
        logging.info(base64String)
        # base64String = ""
        # with open("./data/test_photo.jpg", "rb") as f:
        #    base64String = base64.b64encode(f.read())
        try:
            result = self.face_analyzer.analyze(base64String)
            response: fapb2.AnalyzeFaceResponse = fapb2.AnalyzeFaceResponse(**result)
            return response
        except Exception as e:
            logging.error(e)
            context.abort(grpc.StatusCode.INTERNAL, str(e))
            return fapb2.AnalyzeFaceResponse()


def serve():
    face_analyzer_service = FaceAnalyzerService()
    port = "50051"
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
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
