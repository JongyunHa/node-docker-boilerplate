// 필요한 모듈들을 가져오기
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

// create express server
const app = express();

// json 형태로 오는 요청의 본문을 해석해줄수 있게 등록
app.use(bodyParser.json());

//DB lists 테이블에 있는 모든 데이터를 프론트 서버에 보내주기
app.get('/api/values', (req, res) => {
  // db에서 모든 정보 가져오기
  db.pool.query('SELECT * FROM lists;', (err, results, fileds) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.json(results);
    }
  });
});

// 테이블 생성하기
db.pool.query(
  `CREATE TABLE lists (
	id INTEGER AUTO_INCREMENT,
	value TEXT,
	PRIMARY KEY (id)
)`,
  (err, results, fileds) => {
    console.log('results', results);
  }
);

// client 에서 입력한 값을 데이터 베이스 lists 테이블에 넣어주기
app.post('/api/value', (req, res, next) => {
  // db에 값 넣어주기
  db.pool.query(
    `INSERT INTO lists (value) VALUES("${req.body.value}")`,
    (err, results, fileds) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.json({ success: true, value: req.body.value });
      }
    }
  );
});

// Express 서버 포트 5000에서 시작
app.listen(5000, () => {
  console.log('server is running');
});
