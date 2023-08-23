import dummy from "../db/data.json";

export default function Day() {
    // 날짜가 1인 것만 출력
    const day = 3;

    // filter는 해석 그대로 걸러주는 역할을 하는 함수
    // 주로 특정 조건을 만족하는 새로운 배열을 필요로 할 때 사용
    // sql로 치면 where절에서 하는 행위와 같음
    const wordList = dummy.words.filter(k => (k.day === day));
  return(
    <ul className="list_day">
        <>
        <table>
            <tbody>
                {/* map은 배열의 요소를 하나씩 꺼내서 처리할 때 사용,
                    k는 배열에서 추출 하나의 요소를 의미 */}
                {wordList.map(k => (
                    <tr key={k.id}>
                        <td>{k.eng}</td>
                        <td>{k.kor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    </ul>
  );  
} 