import axios from 'axios';
import React, { FC,useEffect, useState } from 'react';
import Card, { CardVariant } from './Card';
import EventsExample from './EventsExample';
import List from './List';
import TodoItem from './TodoItem';
import UserItem from './UserItem';
import { ITodo, IUser,IAlbum } from '../types/types';
import { BrowserRouter,Route } from 'react-router-dom';
import AlbomItem from './AlbomItem';

const Albom = () => {
    const [alboms,setAlboms] = useState<IAlbum[]>([])
    useEffect(() => {
    
      fetchAlbom()
    }, [])
  
    async function fetchAlbom() {
      try {
        const response = await axios.get<IAlbum[]>('https://jsonplaceholder.typicode.com/albums?_limit=10')
        setAlboms(response.data)
      } catch (e) {
        console.log(e)
      }
    }
      return (
          <List
       items={alboms}
       renderItem={(albom:IAlbum)=> <AlbomItem albom={albom} key={albom.id}/>}
       />
      )
}

export default Albom
