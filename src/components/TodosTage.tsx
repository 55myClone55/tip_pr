import axios from 'axios';
import React, { FC,useEffect, useState } from 'react';
import Card, { CardVariant } from './Card';
import EventsExample from './EventsExample';
import List from './List';
import TodoItem from './TodoItem';
import UserItem from './UserItem';
import { ITodo, IUser } from '../types/types';
import { BrowserRouter,Route } from 'react-router-dom';

const  TodosTage:FC = ()=> {
    const [todos,setTodos] = useState<ITodo[]>([])
  useEffect(() => {
  
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (e) {
      console.log(e)
    }
  }
    return (
        <List
     items={todos}
     renderItem={(todo:ITodo)=> <TodoItem todo={todo} key={todo.id}/>}
     />
    )
}


export default TodosTage

