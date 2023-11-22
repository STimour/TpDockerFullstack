FROM node:18-alpine
WORKDIR /client-app
RUN npm install --global serve
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 1992
CMD serve -s dist -p 1992