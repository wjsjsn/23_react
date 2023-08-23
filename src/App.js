import './App.css';

import Header from "./component/Header";
import Day from './component/Day';
import Daylist from './component/Daylist';

function App() {


  return (
    <div className="App">
      <Header></Header>
      <Daylist></Daylist>
      <Day></Day>
    </div>
  );
}

export default App;
