# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: face_analyzer.proto
# Protobuf Python Version: 5.26.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x13\x66\x61\x63\x65_analyzer.proto\x12\rface_analysis\"*\n\x12\x41nalyzeFaceRequest\x12\x14\n\x0c\x62\x61se64String\x18\x01 \x01(\t\"Q\n\x13\x41nalyzeFaceResponse\x12\x0b\n\x03\x61ge\x18\x01 \x01(\x05\x12\x0c\n\x04race\x18\x02 \x01(\t\x12\x0e\n\x06gender\x18\x03 \x01(\t\x12\x0f\n\x07\x65motion\x18\x04 \x01(\t2f\n\x0c\x46\x61\x63\x65\x41nalysis\x12V\n\x0b\x41nalyzeFace\x12!.face_analysis.AnalyzeFaceRequest\x1a\".face_analysis.AnalyzeFaceResponse\"\x00\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'face_analyzer_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_ANALYZEFACEREQUEST']._serialized_start=38
  _globals['_ANALYZEFACEREQUEST']._serialized_end=80
  _globals['_ANALYZEFACERESPONSE']._serialized_start=82
  _globals['_ANALYZEFACERESPONSE']._serialized_end=163
  _globals['_FACEANALYSIS']._serialized_start=165
  _globals['_FACEANALYSIS']._serialized_end=267
# @@protoc_insertion_point(module_scope)