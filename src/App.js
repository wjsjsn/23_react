import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Main01 from './component/Main01';
import Day from './component/Day';
import Daylist from './component/Daylist';
import Main02 from './component/Main02';
import EmptyPage from './component/EmptyPage';

// 1. App을 BrowserRouter로 감싸기
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <h1>React 연습</h1>
          <hr />
          <button style={{marginLeft:"20px"}}><Link to="/Main01">Main01</Link></button>
          <button style={{marginLeft:"20px"}}><Link to="/Main02">Main02</Link></button>
      </div>
      <Routes>
        <Route path="/" />
        <Route path="/Main01" element={<Main01 />} />
        <Route path="/Main02" element={<Main02 />} />
        <Route path="/Day/:Day" element={<Day />} />
        <Route path="/Daylist" element={<Daylist />} />
        {/* 이외에 url이 들어오면 받아들이는 페이지 */}
        <Route path="/*" element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
