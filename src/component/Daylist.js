import dummy from "../db/data.json";

export default function Daylist() {
 // console.log(dummy)
 // json같은 반복처리를 할 때는 주로 map 사용
  return(
    <ul className="list_day">
        {dummy.days.map(day => (
            <li key={day.id}>Day{day.day}</li>
        ))}
    </ul>
  );  
} 