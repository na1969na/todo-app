import { Todo } from '../types/todo';
import { memo } from 'react';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = memo(({ todo }: TodoItemProps) => {
  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-200">
      <div>
        <h2 className="text-lg font-semibold">{todo.title}</h2>
        <p className="text-sm text-gray-500">{todo.due_date}</p>
      </div>
      <div>
        <button className="text-sm text-blue-500">Edit</button>
        <button className="text-sm text-red-500">Delete</button>
      </div>
    </div>
  );
});

TodoItem.displayName = 'TodoItem';
export default TodoItem;
