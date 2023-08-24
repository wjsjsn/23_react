import dummy from "../db/data.json";
import {useParams} from "react-router-dom";
import Word from "./Word";

export default function Day() {
    // url에 포함된 day값을 가져오기 위해 useParams()
    // useParams()는 router에서 제공
    const day = useParams().Day;

    // filter는 해석 그대로 걸러주는 역할을 하는 함수
    // 주로 특정 조건을 만족하는 새로운 배열을 필요로 할 때 사용
    // sql로 치면 where절에서 하는 행위와 같음
    const wordList = dummy.words.filter(k => (k.day === Number(day)));
  return(
    <ul className="list_day">
        <>
        <h2>Day{day}</h2>
        <table>
            <tbody>
                {/* map은 배열의 요소를 하나씩 꺼내서 처리할 때 사용,
                    k는 배열에서 추출 하나의 요소를 의미 */}
                {wordList.map(k => (
                    // 컴포넌트에 속성을 부여하는 것 => props
                    <Word word={k} key={k.id} />
                ))}
            </tbody>
        </table>
        </>
    </ul>
  );  
} 