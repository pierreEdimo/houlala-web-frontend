FROM node:16-alpine

ENV NODE_ENV development

# https://github.com/vercel/turbo/issues/2198
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# add turborepo
RUN yarn global add turbo

# Set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# Install app dependencies
COPY  ["yarn.lock", "package.json", "./"]

# Copy source files
COPY . /usr/src

# Install app dependencies
RUN npm install

RUN npm run build
EXPOSE 3000 3001

CMD npm run dev
