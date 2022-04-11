import React, { useState } from 'react';
import TodoList from './TodoList';
import styles from './todoTemplate.module.css';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './TodoInsert';

function TodoTemplate() {
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
  const [insertToggle, setInsertToggle] = useState(false);
  const onInsetToggle = () => {
    // setInsertToggle(!insertToggle)
    setInsertToggle(prev => !prev);
  }

  return (
    <div className={styles.template}>
      <div className={styles.title}>오늘의 할일({todos.length})</div>
      <TodoList todos={todos} />
      <div className={styles.addbtn} onClick={onInsetToggle} >
        <MdAddCircle />
      </div>
      {insertToggle && <TodoInsert onClick={onInsetToggle} />}
    </div>
  )
}

export default TodoTemplate;