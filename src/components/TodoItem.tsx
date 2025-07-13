import type { PropsTodoItem } from "../model/TodoType";


export default function TodoItem({todo, onToggle, onRemove} : PropsTodoItem){ // Changed to non-default export
    return (
        <>
            <style>
{`
                li {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #f9f9f9;
                    padding: 15px 20px;
                    margin-bottom: 10px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }

                li:last-child {
                    margin-bottom: 0;
                }

                li:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }

                span {
                    flex-grow: 1;
                    text-align: left;
                    cursor: pointer;
                    font-size: 1.1em;
                    color: #333;
                    transition: all 0.3s ease;
                    word-break: break-word; /* Ensure long words break */
                    padding-right: 10px; /* Space between text and button */
                }

                span.completed {
                    text-decoration: line-through;
                    color: #888;
                    font-style: italic;
                }

                button {
                    padding: 8px 15px;
                    background-color: #dc3545; /* Red for delete */
                    color: white;
                    border: none;
                    border-radius: 6px;
                    font-size: 0.9em;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                    font-weight: 600;
                    box-shadow: 0 2px 5px rgba(220, 53, 69, 0.2);
                }

                button:hover {
                    background-color: #c82333; /* Darker red on hover */
                    transform: translateY(-1px);
                }

                button:active {
                    transform: translateY(0);
                    box-shadow: 0 1px 3px rgba(220, 53, 69, 0.3);
                }
`}
            </style>
            <li>
                {/* span클릭하면 클래스명 토글되서 중앙선 회색글자처리 */}
                {/* todo.completed === true 면 중앙선 및 회색글자 */}
                <span
                    onClick={()=>{onToggle(todo.id)}}
                    className={todo.completed ? 'completed' : ''}
                >
                    {todo.text}
                </span>
                <button onClick={()=>{onRemove(todo.id)}}>삭제</button>
            </li>
        </>
    )
}
