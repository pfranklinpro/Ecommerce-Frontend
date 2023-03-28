# https://medium.com/codex/dockerize-angular-application-69e7503d1816#:~:text=Dockerize%20Angular%20Application%201%20Create%20Angular%20Project%3A%20Use,5%20Run%20Docker%20Container%3A%20...%206%20Summary%3A%20
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod