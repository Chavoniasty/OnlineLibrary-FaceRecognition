from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class AnalyzeFaceRequest(_message.Message):
    __slots__ = ("base64String",)
    BASE64STRING_FIELD_NUMBER: _ClassVar[int]
    base64String: str
    def __init__(self, base64String: _Optional[str] = ...) -> None: ...

class AnalyzeFaceResponse(_message.Message):
    __slots__ = ("age", "race", "gender", "emotion")
    AGE_FIELD_NUMBER: _ClassVar[int]
    RACE_FIELD_NUMBER: _ClassVar[int]
    GENDER_FIELD_NUMBER: _ClassVar[int]
    EMOTION_FIELD_NUMBER: _ClassVar[int]
    age: int
    race: str
    gender: str
    emotion: str
    def __init__(self, age: _Optional[int] = ..., race: _Optional[str] = ..., gender: _Optional[str] = ..., emotion: _Optional[str] = ...) -> None: ...
