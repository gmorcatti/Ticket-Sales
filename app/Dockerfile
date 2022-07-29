FROM node:16.13.0

WORKDIR /app-node

EXPOSE 3000

COPY package.json .

RUN yarn install

COPY . .

# Add docker-compose-wait tool -------------------
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait