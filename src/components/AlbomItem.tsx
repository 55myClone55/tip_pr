import React, { FC } from 'react'
import { ITodo,IAlbum } from '../types/types'

interface AlbomItemProps{
    albom: IAlbum;
}

const AlbomItem:FC<AlbomItemProps> = ({albom})=> {
    return (
        <div style={{padding:15, border:'1px solid gray'}}>
         {albom.id}. {albom.title}
        </div>
    )
}

export default AlbomItem
