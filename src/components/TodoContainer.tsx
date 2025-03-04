import { memo } from 'react';
import TodoItem from './TodoItem';
import TodoGroup from './TodoGroup';
import { useTodos } from '../hooks/useTodos';
import LoadingTodoContainer from './LoadingTodoContainer';

const TodoContainer = memo(() => {
  const { todos, isLoading, error } = useTodos();

  if (isLoading) {
    return <LoadingTodoContainer />;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error.message}</div>;
  }

  return (
    <div className="w-full">
      <TodoGroup />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
});

TodoContainer.displayName = 'TodoContainer';
export default TodoContainer;
