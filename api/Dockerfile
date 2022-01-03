FROM node:14.16.0

LABEL version="1.0"
LABEL description="Production image for server-api for Bike Shop"

WORKDIR /app

COPY ./package.json ./

RUN yarn 

COPY . . 

EXPOSE 5000

CMD ["node", "index.js"]