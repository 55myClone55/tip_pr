import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { ITodo, IUser } from './types/types';
import { BrowserRouter,NavLink,Route } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosTage from './components/TodosTage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = ()=> {
  
  // const users:IUser[] = [
  //   {id:1,name:"my",email:'@mail',address:{city:'Kharkov',street:'kov',zipcode:'dksadk'}},
  //   {id:2,name:"m2y",email:'2@mail',address:{city:'Kharkov2',street:'kov2',zipcode:'2dksadk'}}
  // ]
  return (
    <BrowserRouter>
    <div>
      <div>
<NavLink to='/users'>User</NavLink>
<NavLink to='/todos'>List does</NavLink>
      </div>
   <Route path={'/users'} exact>
     <UserPage/>
     </Route> 

     <Route path={'/todos'} exact>
     <TodosTage/>
     </Route>

     <Route path={'/users/:id'}>
     <UserItemPage/>
     </Route>
     <Route path={'/todos/:id'}>
     <TodoItemPage/>
     </Route>     
    </div>
    </BrowserRouter>
    
  )
}
export default App