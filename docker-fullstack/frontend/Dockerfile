FROM node:alpine as builder

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run builder

FROM nginx

EXPOSE 3000

# 작성한 default.conf 파일을 도커 안의 default.conf 파일위에 덮어씌운다.
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# build 파일을 nginx 기본경로에 복사
COPY --from=builder /app/build /usr/share/nginx/html