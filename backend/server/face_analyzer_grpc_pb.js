// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var face_analyzer_pb = require('./face_analyzer_pb.js');

function serialize_face_analysis_AnalyzeFaceRequest(arg) {
  if (!(arg instanceof face_analyzer_pb.AnalyzeFaceRequest)) {
    throw new Error('Expected argument of type face_analysis.AnalyzeFaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_face_analysis_AnalyzeFaceRequest(buffer_arg) {
  return face_analyzer_pb.AnalyzeFaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_face_analysis_AnalyzeFaceResponse(arg) {
  if (!(arg instanceof face_analyzer_pb.AnalyzeFaceResponse)) {
    throw new Error('Expected argument of type face_analysis.AnalyzeFaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_face_analysis_AnalyzeFaceResponse(buffer_arg) {
  return face_analyzer_pb.AnalyzeFaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The face analysis service definition.
var FaceAnalysisService = exports.FaceAnalysisService = {
  // Analyze the face image and return the face analysis result.
analyzeFace: {
    path: '/face_analysis.FaceAnalysis/AnalyzeFace',
    requestStream: false,
    responseStream: false,
    requestType: face_analyzer_pb.AnalyzeFaceRequest,
    responseType: face_analyzer_pb.AnalyzeFaceResponse,
    requestSerialize: serialize_face_analysis_AnalyzeFaceRequest,
    requestDeserialize: deserialize_face_analysis_AnalyzeFaceRequest,
    responseSerialize: serialize_face_analysis_AnalyzeFaceResponse,
    responseDeserialize: deserialize_face_analysis_AnalyzeFaceResponse,
  },
};

exports.FaceAnalysisClient = grpc.makeGenericClientConstructor(FaceAnalysisService);
