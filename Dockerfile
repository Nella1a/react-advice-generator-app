FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY tailwind.config.js .
COPY tsconfig.json .
COPY jest.config.js .
COPY jest.setup.js .
COPY babel.config.js .
COPY src/ ./src/
COPY public/ ./public/
CMD ["npm", "start"]
