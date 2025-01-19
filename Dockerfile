FROM node:18.20.4-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY . .

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "loader.cjs" ]