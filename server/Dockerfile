FROM node:14

RUN mkdir /app

WORKDIR /app

COPY package.json /app
COPY .env /app

RUN npm install
