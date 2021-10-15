import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemPtops{
    user:IUser;
    onClick:(user:IUser)=> void;

}

const UserItem:FC<UserItemPtops> = ({user,onClick})=> {
  
  return (
    <div onClick={()=>onClick(user)}  style={{padding:15, border:'1px solid gray'}}>
        {user.id}. {user.name} Liven in City {user.address.city} street {user.address.street}
     </div>
   
  )
}
export default UserItem