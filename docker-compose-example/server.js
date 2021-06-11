const express = require("express");
const redis = require("redis");

// create redis client
const client = redis.createClient({
  // docker 환경과 docker 환경일때 host 가 다릅니다.
  // local - https://redis-server.com
  // docker - docker-compose.yml 파일에 명시한 컨테이너 이름으로 줍니다.
  host: "redis-server",
  port: 6379, // default redist port
});

const app = express();

// start number 0
client.set("number", 0);

app.get("/", (req, res) => {
  client.get("number", (err, number) => {
    // get number after increment number
    client.set("number", +number + 1);
    res.send(`refesh page count: ${number}`);
  });
});

app.listen(8080);
console.log("server is running");
