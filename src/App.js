import styles from './App.css'
import { useState } from 'react';

const heavyWork = () => {
  console.log("heavyWork");
}
function App() {
const[names, setNames] = useState(['홍길동', '임꺽정']);
const[input, setInput] = useState('');

const handleInputChange = (e) => {
  heavyWork();




  
  setInput(e.target.value);
}

const handleUpload = () => {
 // setNames([input]);
 // 이전 상태값에 현재값을 추가
 // prevState => 이전 state 상태값을 기억하고 있는 변수
 setNames((prevState) => {
  return([...prevState, input])
 })
}
  return (
    <div className="App">
        <input type='text' value={input} onChange={handleInputChange} />
        <button onClick={handleUpload}>upload</button>
        {/* 배열 */}
        {/* {names} => 한 번에 나옴 */}
        {/* 배열일 경우 하나씩 호출하는 방법 */}
        {names.map((name, idx) => {
          return <p key={idx}>{name}</p>
        })}
        </div>
  );
}

export default App;