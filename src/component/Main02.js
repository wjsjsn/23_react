import { useState } from "react";

function Head(props) {
    return(
        <header>
            {/* e => 이벤트 */}
            <h1><a href="/" onClick={(e)=>{
                // 페이지 리로드를 하지 않게 하자
                e.preventDefault();

                // Head 컴포넌트에 onChangeMode를 실행한다. 뜻
                props.onChangeMode();
            }}>{props.title}</a></h1>
        </header>
    );
}
function Article(props) {
    return(
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>

    );
}
function Nav(props) {
    console.log(props)
    const arr = [];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        arr.push(<li key={t.id}> {t.id} .
       <a id={t.id} href={"/read/"+t.id} onClick={(e)=>{
            e.preventDefault();
            props.onChangeMode(e.target.id);
       }}> {t.title}</a>
        </li>);
    }
    return(
        <nav>
            <ol>
                {arr}
            </ol>
        </nav>
    );
}

function Create(props) {
    return <article>
        <h2>Create</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            props.onCreate(title, body);
        }}>
            <p><input type="text" name="title" placeholder="title" /></p>
            <p><textarea name="body" placeholder="body"></textarea></p>
            <p><input type="submit" value="Create" /></p>
        </form>
    </article>
}

export default function Main02() {
    const top = [
        {id:1, title:"HTML", body : "Hypertext Markup Language"},
        {id:2, title:"CSS", body : "Cascading Style Sheets"},
        {id:3, title:"JS", body : "JavaScript"},
    ];
    const[mode, setMode] = useState('WELCOME');
    const[id, setId] = useState(null);
    const[nextId, setNextId] = useState(4);
    let content = null;
    if(mode === 'WELCOME'){
        content = <Article title="Welcome" body="Hello, WEB" />;
    }else if(mode === 'READ'){
        let title, body = null;
        for (let i = 0; i < top.length; i++) {
            // id 조작을 위해 useState 사용
            if(top[i].id === Number(id)){
               title = top[i].title;
               body = top[i].body; 
            }
        }
        content = <Article title={title} body={body} />;
    }else if(mode === 'CREATE'){
        content = <Create onCreate={(_title, _body)=>{
            const newTop = {id:nextId, title:_title, body:_body};
            // top 배열을 복사해서 newTops 만들기
            const newTops = [...top];
            // newTops에 파라미터로 넘어온 값을 배열로 만든 newTop을 추가
            newTops.push(newTop);
            setMode('READ');
            setId(nextId);
            setNextId(nextId + 1);
        }} />
    }
return(
    <div>
        {/* 컴포넌트, props */}
        <Head title="WEB" onChangeMode={()=>{
         //   alert("Head");
         setMode("WELCOME");
        }} />
        <Nav topics={top} onChangeMode={(id)=>{
        //    alert(id);
        setMode("READ");
        setId(id);
        }} />
        {/* <Article title="Welcome" body="Hello, WEB" /> */}
        {content}
        <p>
        <a href="/create" onClick={(e) => {
            e.preventDefault();
            setMode('CREATE');
        }}>Create</a>
        </p>
    </div>
  );
}