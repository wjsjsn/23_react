// javascript에서 변수 설정 : var(변수), let(변수), const(상수)
// 우선, var는 변수 선언 방식에 있어서 큰 단점을 가지고 있다.
// 변수를 한 번 더 선언했음에도 불구하고, 에러가 나오지 않고 각기 다른 값이 출력되는 것을 볼 수 있다.
// 이는 유연한 변수 선언으로 간단한 테스트에는 편리 할 수 있겠으나, 
// 코드량이 많아 진다면 어디에서 어떻게 사용 될지도 파악하기 힘들뿐더러 값이 바뀔 우려가 있다.
// ES6 이후 이를 보완하기 위해 추가된 변수 선언 방식이 let, const
// let : 일반적인 변수
// const : 상수

import { useState } from "react";

// 속성을 받아줌
// props : object(객체)
export default function Hello (props) {
    console.log("props : ", props);
    // jsx는 하나의 태그만 만들 수 있음
    // props는 강제로 변경 x
    const[name, setName] = useState('hong');

    // useState를 이용
    const[age, setAge] = useState(props.age);

    const msg = props.age > 19 ? "성인" : "미성년자";

    function changeName() {
        const newName = name === 'hong' ? 'kim' : 'hong';
        setName(newName);
        setAge(age + 5);
    }
    return(
        <div>
            <h1>State</h1>
            <h1>{name}({age}) : {msg}</h1>
            <button onClick={changeName}>changeName</button>            
        </div>
    )
}
;