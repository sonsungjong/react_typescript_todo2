import { useState } from "react";

export default function TSExample(){

    // 타입스크립트 사용 이유 : 여러 사람이 코딩 작업을 할 때 실수를 방지하기 위해서
    // 타입스크립트를 실행하면 자바스크립트 파일로 만들어짐
    // 타입스크립트는 코드 짤 때 에러 내용을 알려줌

    // number, string, boolean
    // 타입스크립트에서 변수 만드는 법
    let num : number;
    num = 0;
    //num = '0';
    console.log(num)

    let 글자 : string;
    //글자 = 0;
    //글자 = true;        // 타입에 맞지않는 값을 대입하려하면 에러!
    글자 = '문자열'

    let 불리언 : boolean = false;
    불리언 = true;
    console.log(불리언)

    // 배열 : 자료형[]
    let arrJS : string[] = ['a', 'b', 'c', 'd']
    arrJS.push('안녕')
    console.log(arrJS)
    let anyArr : any[] = [1, 2, '3', true];     // any : 자바스크립트와 동일(모두가능)
    
    // 객체
    // interface 를 먼저 만들어서 자료형을 직접 만든다
    interface IPerson{
        name : string,
        age : number,
        isPerson : boolean
    }

    // 객체
    let obj : IPerson = {
        name: '이름',
        age : 12,
        isPerson : true,
        //hobby : '취미'
    }
    obj = {name:'홍길동', age:33, isPerson:false}
    console.log(obj)

    // 객체 배열
    let people : IPerson[] = [];
    people.push(obj);
    people = [...people, {name:'이름', age:32, isPerson:true}]

    // 유니온 타입 (여러개 타입 허용)
    // 문자 또는 불리언은 가능하게 하고 싶다
    let union_value : string | undefined;       // undefined : 무언가 들어온적 없음 (fetch 대기중)


    // 함수
    // 매개변수는 오른쪽에 : 타입
    // 리턴값은 함수 바깥 오른쪽에 적는다
    function sub(a : number, b : number) : number
    {
        return a-b
    }

    function saveLog(msg : any) : void
    {
        console.log(msg)
    }

    // 2개 이상 자료형을 넣어줘야할땐 <> 하고 표시
    const [data, setData] = useState<string | undefined>('str');
    //setData(0);
    setData('sa');
    const [num1, setNum1] = useState(0);        // 단순 자료형은 생략해도 자동으로 넣어줌

    // <> : 제네릭 Generic (어떤 자료형이든 가능하게 하고 싶으니 사용할 때 타입을 결정하게 하자)
    function genericFunction<T>(msg : T){
        console.log(msg);
    }

    // 만들때 타입을 정하는게 아니라 사용할때 타입을 정하게 한다 <>
    genericFunction<string>('메시지')
    genericFunction<number>(365)
    genericFunction<boolean>(true)

    

    return(
        <>

        </>
    )
}