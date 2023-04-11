FROM node:18-alpine
ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 
RUN yarn add vite

COPY . .

EXPOSE 5173

CMD [ "yarn", "dev" ]