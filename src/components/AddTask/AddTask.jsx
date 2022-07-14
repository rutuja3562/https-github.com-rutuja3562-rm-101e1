import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [task,setTask]=useState("")
  const handleClick=()=>{
    setTask(task);
  }
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={(e)=>{
       setTask(e.target.value)
      }}/>
      <button data-testid="add-task-button" onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default AddTask;
