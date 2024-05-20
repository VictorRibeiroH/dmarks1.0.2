FROM node:lts-alpine

RUN mkdir /app

WORKDIR /app

COPY . /app/

RUN npm install \
    && npm run build

ENTRYPOINT [ "npm", "run", "start" ]