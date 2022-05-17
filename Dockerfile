FROM node:14
WORKDIR /backend
COPY package.json .
RUN npm install
COPY . .
RUN cd backend
CMD npm start