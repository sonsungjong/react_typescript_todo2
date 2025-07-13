import type { PropsTodoList } from "../model/TodoType";
import TodoItem from "./TodoItem";

export default function TodoList({todos, onToggle, onRemove} : PropsTodoList){ // Changed to non-default export
    return(
        <>
        <style>
{`
            ul {
                list-style: none; /* Remove default bullet points */
                padding: 0;
                margin: 0;
            }
`}
        </style>
            <ul>
                {
                    todos.length === 0 ? (
                        <p style={{ color: '#888', fontSize: '1.1em', marginTop: '20px' }}>
                            아직 할 일이 없어요! 새로운 할 일을 추가해보세요.
                        </p>
                    ) : (
                        todos.map((item)=>{ // Removed index as it's not used
                            return(
                                <TodoItem key={item.id} todo={item} onToggle={onToggle} onRemove={onRemove} />
                            )
                        })
                    )
                }
            </ul>
        </>
    )
}