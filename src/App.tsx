import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Loader, TodoFilter, TodoList, TodoModal } from './components';
import { useEffect, useState } from 'react';
import { getTodos } from './api';
import { useDispatch } from 'react-redux';
import { useAppSelector } from './app/hooks';
import { setTodos } from './features/todos';

export const App = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const todos = useAppSelector(state => state.todos);

  useEffect(() => {
    setLoading(true);
    const load = async () => {
      try {
        const data = await getTodos();

        dispatch(setTodos(data));
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [dispatch]);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter />
            </div>

            <div className="block">
              {loading ? <Loader /> : <TodoList todos={todos} />}
            </div>
          </div>
        </div>
      </div>

      <TodoModal />
    </>
  );
};
