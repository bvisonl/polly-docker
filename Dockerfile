FROM node:10.16.0-stretch-slim

COPY . /app
WORKDIR /app

RUN apt-get update && apt-get install lame -y
RUN npm install 

ENTRYPOINT ["node", "polly.js"]