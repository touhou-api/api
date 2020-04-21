FROM node:12

WORKDIR /api

ARG NODE_ENV=production

ADD package.json .
ADD yarn.lock .

RUN yarn install --production --frozen-lockfile

ADD src src
ADD nest-cli.json .
ADD tsconfig.json .
ADD tsconfig.build.json .

RUN rm -rdf dist/
RUN yarn run build

CMD ["yarn", "run", "production"]
