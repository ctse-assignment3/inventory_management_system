FROM node:14
WORKDIR /backend
COPY package.json .
RUN npm install
COPY . .

Expose 8085

CMD npm start