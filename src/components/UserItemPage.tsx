import axios from 'axios';
import React, {FC, useEffect, useState } from 'react';
import Card, { CardVariant } from './Card';
import EventsExample from './EventsExample';
import List from './List';
import TodoItem from './TodoItem';
import UserItem from './UserItem';
import { ITodo, IUser } from '../types/types';
import { BrowserRouter,Route } from 'react-router-dom'
import { useParams,useHistory } from 'react-router-dom';

interface UserItemPageParems{
    id:string
}

const UserItemPage:FC = () =>{
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParems>()//добавляет параметр
const history = useHistory()

    useEffect(() => {
      fetchUser()
      
    }, [])
    async function fetchUser() {
      try {
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
        setUser(response.data)
      } catch (e) {
        alert(e)
      }
    }
    return (
        <div>
            <button onClick={()=>history.push('/users')}>Back</button>
            <div>
{user?.email}
            </div>
            <div>
{user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    )
}

export default UserItemPage
