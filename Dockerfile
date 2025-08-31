
FROM node:20-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY tailwind.config.js ./
COPY tsconfig.json ./
COPY index.html ./
COPY postcss.config.js ./
COPY vite.config.js ./
COPY babel.config.js ./
COPY entrypoint.sh ./
COPY package.json ./
COPY src ./src/
COPY public ./public/


# Set host to allow external connections
ENV VITE_HOST=0.0.0.0
RUN chmod +x entrypoint.sh

# Expose Vite's port
EXPOSE 5173

#CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
CMD ./entrypoint.sh