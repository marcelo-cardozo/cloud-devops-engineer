FROM node:slim as build

# Create app directory
WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]