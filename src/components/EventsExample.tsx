import React, { FC, useRef, useState } from 'react'


const EventsExample:FC = ()=> {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
const inputRef = useRef<HTMLInputElement>(null)
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }//связанные с онченч

    const clickHandler =  (e:React.MouseEvent<HTMLButtonElement>)=> {
        console.log(inputRef.current?.value)
//console.log(value)
    }//связанные с мышкой
    const dragHandler=(e:React.DragEvent<HTMLDivElement>)=>{
console.log('DDDDD')
    }
    const dragWithPreventHandler=(e:React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault()
      setIsDrag(true)
      //console.log('dWPH')
            }
    const dropHandler=(e:React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault()
        setIsDrag(false)
                //console.log('drop')
            }
            const leaveHandler=(e:React.DragEvent<HTMLDivElement>)=>{
                e.preventDefault()
                setIsDrag(false)
                //console.log('leave')
                    }
                  
    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder='uprav' />
            <input ref={inputRef} type="text" placeholder='neuprav' />
            <button onClick={clickHandler}>text</button>
            <div onDrag={dragHandler} draggable style={{width:200,height:200,background:'red'}}></div>
            <div 
            onDrop={dropHandler}
            onDragLeave={leaveHandler}
            onDragOver={dragWithPreventHandler}
            style={{width:200,height:200,background: isDrag ? 'blue' : 'green',marginTop:15}}></div>
        </div>
    )
}



export default EventsExample

