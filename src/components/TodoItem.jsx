import React, {useState} from 'react'
import styles from "./todo.module.css";

const TodoItem = ({todo, onDelete}) => {

    const [isCompleted, setIsCompleted]= useState(todo.isCompleted);
  return (
    <div>
        <div className={styles.todo} key={todo.id}>
        <input type="checkbox" checked={isCompleted} 
        onChange={(e) =>{
            setIsCompleted(e.target.checked);
        }}/>
        <div className={styles.textarea}>
        <div className={isCompleted ? styles.striked : ""}> {todo.value} </div>
        </div>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
</div>
  );
};

export default TodoItem;