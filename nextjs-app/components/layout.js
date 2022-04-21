import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import axios from 'axios';
import {ulid} from 'ulid'
import React,{ useState, useEffect} from 'react'
import Test from './test'
const name = 'kubo'
export const siteTitle = 'Next.js Sample'

export default function Layout({ children, home }) {
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
  console.log('start')
  console.log(ulid())
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1>TODO進捗管理 main</h1>
            <Test>q</Test>
            <Image
              priority
              src="/images/001.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <h1>TODO進捗管理Sub</h1>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/001.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <button>TODOを追加2</button>
            <ul>
            {todoList.length}
              { 
                todoList.map((todo) => (
                <li key={todo.id}>
                  {todo.content}({todo.done ? '完了': '未完了'})
                </li>))
              }
            </ul>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}