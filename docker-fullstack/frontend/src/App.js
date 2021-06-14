import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [lists, setLists] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    // 여기서 데이터베이스에 있는 값을 가져온다.
    // nginx proxy를 사용하기 때문에 앞의 http://localhost 부분이 생략됨
    axios.get('/api/values').then((response) => {
      console.log(response);
      setLists(response.data);
    });
  }, []);

  const changeHandler = (event) => {
    setValue(event.currentTarget.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post('/api/value', { value }).then((response) => {
      if (response.data.success) {
        console.log('response', response);
        setLists([...lists, response.data]);
        setValue('');
      } else {
        alert('값을 DB에 넣는데 실패했습니다.');
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          {lists && lists.map((list, idx) => <li key={index}>{list.value}</li>)}
        </div>
        <div className="example" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="입력해주세요..."
            onChange={changeHandler}
            value={value}
          />
          <button type="submit">확인</button>
        </div>
      </header>
    </div>
  );
}

export default App;
