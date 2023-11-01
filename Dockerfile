FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .   

EXPOSE 4173

RUN npm run build 

CMD ["npm" ,"run", "preview"]