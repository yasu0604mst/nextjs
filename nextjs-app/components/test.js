import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import React,{ useState, useEffect} from 'react'
import axios from 'axios';


export default function Test() {
  const [todoList, setTodoList] = useState([]);
  useEffect( () => {
    const fetchData = async () => {
      const todoDataUrl = 'http://localhost:3100/todos'
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data)
      return console.log(response.data);
    }
    fetchData();
  },[]);
  return (
    <div className={styles.container}>
      <div>test1</div>
    </div>
  )
}