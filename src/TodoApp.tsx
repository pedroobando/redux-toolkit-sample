import { FC, useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store';

export const TodoApp: FC = () => {
  const [todoId, setTodoId] = useState(1);
  // const dataTodo = useGetTodosQuery();
  // const { data: todos = [], isLoading } = dataTodo;
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  // console.log(dataTodo);
  // console.log(todos);
  // console.log(isLoading);

  return (
    <>
      <h1>RTK Query - TodoApp</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        {todos.map((todo: { id: string; title: string; completed: boolean }) => (
          <li key={todo.id}>
            <strong>{!todo.completed ? 'Pendiente' : 'Done'} </strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
      <button onClick={() => setTodoId((t) => (t -= 1))}>Prev Todo</button>
      <button onClick={() => setTodoId((t) => (t += 1))}>Next Todo</button>
    </>
  );
};
