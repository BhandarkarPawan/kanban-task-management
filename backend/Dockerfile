FROM node:14-stretch as builder
WORKDIR /usr/app
ENV PYTHONUNBUFFERED=1
## Install build toolchain, install node deps and compile native add-ons
RUN apt-get update && apt-get install -y python-pip make g++ && \
    rm -r /usr/lib/python*/ensurepip && \
    pip install --upgrade pip setuptools && \
    rm -r /root/.cache

COPY package*.json ./
RUN npm install
COPY . .