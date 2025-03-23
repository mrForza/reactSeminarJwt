FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE 1883

CMD ["npm", "run", "start"]
