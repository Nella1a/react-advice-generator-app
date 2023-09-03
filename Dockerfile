FROM node:20-alpine

WORKDIR /app

COPY package.json .

COPY yarn.lock .

COPY tailwind.config.js .

RUN yarn install

COPY . .


EXPOSE 3000

CMD [ "npm", "start"  ]