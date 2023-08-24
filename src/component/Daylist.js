import dummy from "../db/data.json";
import {Link} from "react-router-dom";

export default function Daylist() {
 // console.log(dummy)
 // json같은 반복처리를 할 때는 주로 map 사용
 // react-route => Link
  return(
    <ul className="list_day">
        {dummy.days.map(k => (
            <li key={k.id}><Link to={`/Day/${k.day}`}>Day{k.day}</Link></li>
        ))}
    </ul>
  );  
} 