## React-docker single container build

### build
- docker build -f Dockerfile.dev -t temp .

### docker run

- docker run -it -p 3000:3000 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app temp
