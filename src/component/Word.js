import {useState} from "react";

// 객체이기 때문에 props에 사용된 이름 그대로 사용
export default function Word({word}) {
    // 보였다 안보였다하기 위해서 
    // useState 사용,
    // isShow 상태값을 만들어주고, props로 word를 받아와
    // isShow가 true일 때만 보이게 하기
    const[isShow, setIsShow] = useState(false); 
    function toggleShow() {
        setIsShow(! isShow);
    }
    return(
        <tr>
            <td><input type="checkbox" /></td>
            <td>{word.eng}</td>
             {/* 둘 다 true일 때만 보임 */}
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow} style={{marginRight:"20px", backgroundColor:"pink"}}>뜻 {isShow? '숨기기' : '보기'}</button>
                <button style={{backgroundColor:"lightgray"}}>삭제</button>
            </td>
        </tr>
    );
}