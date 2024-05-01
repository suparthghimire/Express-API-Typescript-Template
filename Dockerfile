FROM node:alpine

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm build

RUN chmod +x start.sh

CMD ["sh", "start.sh"]