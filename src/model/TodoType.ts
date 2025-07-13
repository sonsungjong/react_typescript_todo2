// 할 일에 대한 타입 (input에 입력한 내용을 Todo 타입의 형태로 state에 저장)
// 객체 타입을 만들때 
// 1. interface
// 2. type
// 3. class

// 클래스는 변수(객체)를 만들때 new 라는 키워드로 만들어준다
// App.tsx에서 state에 보관할 타입
export class Todo
{
    id : number;
    text : string;
    completed : boolean;

    constructor(_id : number, _text : string){
        // 함수 안에서 클래스에서 만든 멤버변수를 사용하려면 앞에 this. 표시
        this.id = _id;                // 추가한 날짜(ms)
        this.text = _text;          // input에 입력한 할일메모
        this.completed = false;     // 완료여부 체크박스
    }
}

// Todo 배열을 자식 컴포넌트에 props로 넘길건데 그 타입을 정의
// 할 일들을 보여줄 컴포넌트가 받을 props 타입 (App.tsx => TodoList.tsx)
// 완료여부변경함수, 삭제함수
export interface PropsTodoList
{
    todos : Todo[];
    onToggle : (id: number)=>void;
    onRemove : (id : number)=>void;      // 매개변수는 숫자1개, 리턴값은 없음void
}

// 각 할 일 항목에 해당하는 컴포넌트가 받은 Props의 타입 (TodoList.tsx => TodoItem.tsx)
export type PropsTodoItem = 
{
    todo : Todo;
    onToggle : (id: number)=>void;
    onRemove : (id : number)=>void;      // 매개변수는 숫자1개, 리턴값은 없음void
}

// interface 와 type의 차이?
// type은 유니온(타입 합치기)이나 조건타입 처리가 가능
// interface는 타입을 합칠 순 없지만 extends 상속이 가능 (새로운 인터페이스를 만들때 활용)
