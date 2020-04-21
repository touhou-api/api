FROM node:12

WORKDIR /api

ADD package.json .
ADD yarn.lock .

RUN yarn install --frozen-lockfile

ADD src src
ADD nest-cli.json .
ADD tsconfig.json .
ADD tsconfig.build.json .

RUN yarn run build

CMD ["yarn", "run", "production"]
