FROM node:12.16.3-stretch-slim

COPY . /src/app

WORKDIR /src/app

RUN yarn install:clean \
  && yarn build

CMD yarn start
