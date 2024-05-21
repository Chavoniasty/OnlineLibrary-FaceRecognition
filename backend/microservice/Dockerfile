FROM python:3.11

RUN apt-get update && apt-get install ffmpeg libsm6 libxext6  -y
WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 50051


COPY . .

ENV PYTHONUNBUFFERED 1
