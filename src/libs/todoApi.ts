import supabase from './supabaseClient';
import { Todo } from '../types/todo';
import { PostgrestSingleResponse } from '@supabase/supabase-js';

export async function fetchTodos(): Promise<Todo[]> {
  const { data, error }: PostgrestSingleResponse<Todo[]> = await supabase
    .from('todos')
    .select('*');
  if (error) {
    console.error('Error fetching todos:', error.message);
    return [];
  }
  return data || [];
}

export async function createTodo(newTodo: Partial<Todo>): Promise<Todo | null> {
  const { data, error }: PostgrestSingleResponse<Todo> = await supabase
    .from('todos')
    .insert(newTodo)
    .select()
    .single();
  if (error) {
    console.error('Error adding todo:', error.message);
    return null;
  }
  return data;
}

export async function updateTodoStatus(
  id: string,
  status: string,
): Promise<boolean> {
  const { error } = await supabase
    .from('todos')
    .update({ status: status })
    .eq('id', id);
  if (error) {
    console.error('Error updating todo status:', error.message);
    return false;
  }
  return true;
}

export async function updateTodo(
  id: string,
  updates: Partial<Todo>,
): Promise<boolean> {
  const { error } = await supabase.from('todos').update(updates).eq('id', id);
  if (error) {
    console.error('Error updating todo:', error.message);
    return false;
  }
  return true;
}

export async function deleteTodo(id: string): Promise<boolean> {
  const { error } = await supabase.from('todos').delete().eq('id', id);
  if (error) {
    console.error('Error deleting todo:', error.message);
    return false;
  }
  return true;
}
