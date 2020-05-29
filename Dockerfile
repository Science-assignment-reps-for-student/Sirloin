FROM node:14.3.0

MAINTAINER Mallycrip <migsking@naver.com>

RUN mkdir -p /app
WORKDIR /app
ADD . /app

RUN npm install

ENTRYPOINT ["npm", "start"]

EXPOSE 5410