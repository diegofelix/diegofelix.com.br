FROM node:21.6.1-alpine

RUN apk add bash
RUN npm install -g npm@10.8.3
RUN mkdir -p /var/www/
VOLUME [ "/var/www/" ]

USER node
WORKDIR /var/www/