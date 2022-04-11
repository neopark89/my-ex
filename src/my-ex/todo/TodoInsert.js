import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import styles from './todoInsert.module.css';

function TodoInsert({onInsertToggle}) {
  return (
    <div>
      <div className={styles.background} onClick={onInsertToggle}></div>
      <form>
        <input></input>
        <button type='submit'>
          <MdAddCircle />
        </button>
      </form>
    </div>
  )
}

export default TodoInsert;
