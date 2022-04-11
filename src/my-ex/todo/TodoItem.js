import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './todoItem.module.css';

function TodoItem({ todo }) {
  const { id, text, checked } = todo;
  return (
    <div className={styles.container}>
      {/* <div className={`content ${checked ? "checked" : ""}`}> */}
      <div className={styles.content}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </div>
      <div className={styles.text}>{text}</div>
    </div>

  )
}

export default TodoItem;