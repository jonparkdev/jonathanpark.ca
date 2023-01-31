FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci

COPY src ./src
COPY public ./public
COPY next.config.mjs ./
COPY jsconfig.json ./
COPY postcss.config.js ./
COPY tailwind.config.js ./

CMD ["npm", "run", "dev"]