import { Todos } from '../../types/todos';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todos[],
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => <TodoInfo key={todo.id} todo={todo} />)}
    </section>
  );
};
