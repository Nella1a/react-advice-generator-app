FROM node:20-alpine
WORKDIR /opt/hotdeals
COPY package.json ./
COPY tailwind.config.js ./
COPY tsconfig.json ./
COPY index.html ./
COPY postcss.config.js ./
COPY vite.config.js ./
COPY babel.config.js ./
COPY src ./src/
COPY public ./public/

RUN npm install
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
