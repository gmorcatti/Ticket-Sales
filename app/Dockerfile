FROM node:16.13.0

WORKDIR /app-node

EXPOSE 3000

COPY package.json .

RUN yarn install

COPY . .

CMD [ "npm", "run", "start:dev:migrate" ]