import { useDispatch } from 'react-redux';
import { Todo } from '../../../types/Todo';
import { currentTodoSlice } from '../../../features/currentTodo';

interface TodoElementProps {
  todo: Todo;
}

export const TodoElement: React.FC<TodoElementProps> = ({ todo }) => {
  const completedTodo = todo.completed;
  const dispatch = useDispatch();

  const openTodo = (el: Todo) => dispatch(currentTodoSlice.actions.addTodo(el));

  return (
    <tr data-cy="todo" className="has-background-info-light?">
      <td className="is-vcentered">{todo.id}</td>

      {todo.completed ? (
        <td className="is-vcentered">
          <span className="icon" data-cy="iconCompleted">
            <i className="fas fa-check" />
          </span>
        </td>
      ) : (
        <td className="is-vcentered"> </td>
      )}

      <td className="is-vcentered is-expanded">
        <p className={completedTodo ? 'has-text-success' : 'has-text-danger'}>
          {todo.title}
        </p>
      </td>

      <td className="has-text-right is-vcentered">
        <button data-cy="selectButton" className="button" type="button">
          <span className="icon" onClick={() => openTodo(todo)}>
            <i className="far fa-eye" />
          </span>
        </button>
      </td>
    </tr>
  );
};
