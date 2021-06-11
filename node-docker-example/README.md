## Docker node example

### docker build image

-   docker build -t image-name ./

### Not copy use docker volume

copy를 사용하지않고 volume 을 사용하여 소스코드가 변경 되어도 이미지를 빌드 하지 않아도 됨

-   docker run -d -p 8080:8080 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app image-name
