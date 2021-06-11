FROM node:13

# Create app directory
WORKDIR /usr/src/app

# 현재 dir 의 package 파일을 Docker ./ 경로에 copy합니다.
COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["node", "server.js"]
