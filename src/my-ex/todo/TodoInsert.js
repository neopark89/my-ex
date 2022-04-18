import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import styles from './todoInsert.module.css';

function TodoInsert({ onInsertToggle, onInsertTodo }) {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue('');
    onInsertToggle();
  }


  return (
    <div>
      <div className={styles.background} onClick={onInsertToggle}></div>
      <form className={styles.form} onSubmit={onSubmit}>
        <input placeholder='please type'
          value={value}
          onChange={onChange}
        ></input>
        <button type='submit'>
          <MdAddCircle />
        </button>
      </form>
    </div >
  );
};

export default TodoInsert;
