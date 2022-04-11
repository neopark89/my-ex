import React from 'react';
import TodoItem from './TodoItem';
import styles from './todoList.module.css';

function TodoList({ todos }) {
  return (
    <div className={styles.TodoList}>{todos.map((todo) => (
      <TodoItem todo={todo} key={todo.id} />
    ))}</div>
  )
}

export default TodoList