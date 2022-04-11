import React from 'react';
import styles from './student.module.css';

function Student({name, dispatch, id, isHere}) {
  return (
    <div>
      <span style={{
        textDecoration: isHere ? 'line-through' : 'none',
        color: isHere ? 'grey' : 'black',
      }}
      onClick={()=>{
        dispatch({
          type: 'mark-student', payload: {id}
        })
      }} className={styles.name}
      >{name}</span>
      <button onClick={() => {
        dispatch({
          type: 'delete-student', payload: {id}
        })
      }}>삭제</button>
    </div>
  )
}

export default Student;