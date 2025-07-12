// 할 일에 대한 타입 (input에 입력한 내용을 Todo 타입의 형태로 state에 저장)
export interface Todo
{
    id : number,
    text : string,
    completed : boolean
}

// Todo 배열을 자식 컴포넌트에 props로 넘길건데 그 타입을 정의
// 할 일들을 보여줄 컴포넌트가 받을 props 타입 (App.tsx => TodoList.tsx)
// 완료여부변경함수, 삭제함수
export interface PropsTodoList
{
    todos : Todo[],
    onToggle : (id: number)=>void,
    onRemove : (id : number)=>void      // 매개변수는 숫자1개, 리턴값은 없음void
}

// 각 할 일 항목에 해당하는 컴포넌트가 받은 Props의 타입 (TodoList.tsx => TodoItem.tsx)
export interface PropsTodoItem
{
    todo : Todo,
    onToggle : (id: number)=>void,
    onRemove : (id : number)=>void      // 매개변수는 숫자1개, 리턴값은 없음void
}