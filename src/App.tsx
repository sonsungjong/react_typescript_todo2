import { useState } from "react";
import TodoList from "./components/TodoList";
import { Todo } from "./model/TodoType";

export default function App() {
  // 객체배열 할일을 추가 id, msg, 완료여부
  // 할일목록 : 할 일은 input에 입력하고 추가시키는 방법
  // 사용자가 할일을 입력하고 추가버튼을 누르면 state에 추가
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  // input 내용을 todo로 추가
  function hAddTodo(event : React.FormEvent){
    // form의 submit이 동작하면 페이지가 새로고침 (리액트는 새로고침이 되면 안됨)
    // 기본 새로고침을 막아줘야한다
    event.preventDefault();

    // inputValue에 있는 값을 setTodos에 넣어준다
    // class는 new로 만들어줘야한다
    if (inputValue.trim() === '') return; // Prevent adding empty todos
    let newTodo : Todo = new Todo(Date.now(), inputValue); // Pass Date.now() for text as well for simplicity
    newTodo.text = inputValue; // Assign actual input value to text
    setTodos((prev)=>{
      return [...prev, newTodo];  // 원래있던 배열에 newTodo 항목 추가
    })

    setInputValue('');

    // console.log(todos)    // todos에 다 저장되기 전에 console.log 실행되서 방금추가한거 안나오게됨
  }

  // 완료 여부 체크
  function hToggleTodo(id : number){
    // id가 일치한 것만 completed의 boolean을 반전
    // !true ==> false
    // !false ==> true
    // !completed
    setTodos((prev)=>{
      return prev.map((item)=>{ // Removed index as it's not used
        return(
          item.id === id ? {...item, completed : !item.completed} : item
        )
      })
    })
  }

  // 추가된 할일 삭제
  function hRemoveTodo(id : number){
    setTodos((prev)=>{
      // id 같지 않은 것만 필터링해서 남긴다음 setTodos에 적용
      return (prev.filter((data)=>{return data.id !== id}))
    })
  }

  return (
    <>
      <style>
{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: flex-start; /* Align to top for better content flow */
            min-height: 100vh;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
        }

        .App {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 500px;
            text-align: center;
            box-sizing: border-box;
        }

        h3 {
            color: #333;
            margin-bottom: 25px;
            font-size: 2em;
            font-weight: 700;
            letter-spacing: -0.5px;
        }

        form {
            display: flex;
            gap: 10px;
            margin-bottom: 30px;
        }

        input[type="text"] {
            flex-grow: 1;
            padding: 12px 15px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 1em;
            outline: none;
            transition: border-color 0.3s ease;
        }

        input[type="text"]:focus {
            border-color: #6a0dad; /* Purple focus border */
        }

        button[type="submit"] {
            padding: 12px 20px;
            background-color: blueviolet; /* Changed to blueviolet */
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1em;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            font-weight: 600;
            box-shadow: 0 2px 8px rgba(138, 43, 226, 0.3); /* Adjusted shadow for blueviolet */
        }

        button[type="submit"]:hover {
            background-color: #7a20c9; /* Darker blueviolet on hover */
            transform: translateY(-2px);
        }

        button[type="submit"]:active {
            transform: translateY(0);
            box-shadow: 0 1px 4px rgba(138, 43, 226, 0.4);
        }
`}
      </style>
      <div className='App'>
        <h3>할 일</h3>
        <form onSubmit={hAddTodo}>
          <input
            type='text'
            value={inputValue}
            onChange={(event)=>{setInputValue(event.target.value)}}
            placeholder='새로운 할 일을 추가하세요...'
          />
          <button type='submit'>추가</button>
        </form>
        <TodoList todos={todos} onToggle={hToggleTodo} onRemove={hRemoveTodo} />
      </div>
    </>
  )
}