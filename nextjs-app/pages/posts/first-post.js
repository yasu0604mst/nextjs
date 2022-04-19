import Link from 'next/link'
import Layout2 from '../../components/layout2'
import React, { useState, useEffect, useContext, createContext } from 'react';
import { useTodo } from '../../hooks/useTodo';


export const LocaleContext = createContext()
export const ThemeContext = createContext()

export default function FirstPost() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todo, setTodo] = useState([{ text: 'Learn Hooks' }]);
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <Layout2>
      <h1>First Post</h1>
      <div>
      <div onClick={() => setCount(count+1)}>{count}</div>
      <div onClick={() => setAge(47)}>{age}</div>
      <div onClick={() => setFruit('apple')}>{fruit}</div>
      <div >{todo.text}</div>
      <div>aa</div>
      </div>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout2>
  );
}