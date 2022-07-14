import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./tasks.module.css";

const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [data,setData]=useState([])
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    axios
      .get("http://localhost:8080/tasks")
      .then((res) => {
        setData(res.data)
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
       {console.log(data)}
        {data.map((e)=>{
          return <div><p>{e.text}</p></div>
        })}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
