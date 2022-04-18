import React, { useState } from 'react';
import TodoList from './TodoList';
import styles from './todoTemplate.module.css';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './TodoInsert';

const nextId = 4;

function TodoTemplate() {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일 1',
      checked: true
    },
    {
      id: 2,
      text: '할일 2',
      checked: false
    },
    {
      id: 3,
      text: '할일 3',
      checked: false
    }
  ]);
  const onInsertToggle = () => {
    // setInsertToggle(!insertToggle);
    setInsertToggle(prev => !prev);
  }

  const onInsertTodo = (text) => {
    if (text === '') {
      return alert('할 일을 입력해주세요.')
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  }

  return (
    <div className={styles.template}>
      <div className={styles.title}>오늘의 할일({todos.length})</div>
      <TodoList todos={todos} />
      <div className={styles.addbtn} onClick={onInsertToggle} >
        <MdAddCircle />
      </div>
      {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo} />}
    </div>
  )
}

export default TodoTemplate;