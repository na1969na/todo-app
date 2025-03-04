import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo } from '../types/todo';
import {
  fetchTodos,
  createTodo,
  updateTodoStatus,
  updateTodo,
  deleteTodo,
} from '../libs/todoApi';

export const useTodos = () => {
  const queryClient = useQueryClient();

  // Fetch todos
  const {
    data: todos = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      try {
        return await fetchTodos();
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'Failed to fetch todos';
        throw new Error(message);
      }
    },
    retry: false,
  });

  // Create todo status
  const { mutate: addTodo } = useMutation({
    mutationFn: createTodo,
    onSuccess: (response: Todo | null) => {
      if (response) {
        queryClient.setQueryData(
          ['todos'],
          (old: { data: Todo[] } | undefined) => ({
            data: [...(old?.data || []), response],
          }),
        );
      }
    },
  });

  return {
    todos,
    isLoading,
    error,
    addTodo,
    updateTodoStatus,
    updateTodo,
    deleteTodo,
  };
};
