import React, { useState } from "react"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import "./index.css"
import List1 from "./List1"
const TodoLIst = () => {
    const [items,setChange]=useState();
    const [newItems,setValue]=useState([]);
    const myfun1 = (event) => {
        setChange(event.target.value);
    }
    const myfun2 = () => {
        setValue((oldItems)=>{
            return [...oldItems,items]

        })    
        setChange("")
    }

    return (
        <>
        <div className="center_div">
            <div className="box">
            <br/>
            <h1>TodoList</h1>
            <br/>
            <input type="text"
             placeholder="add Items"
              onChange={myfun1} 
            value={items}
              />
            <Button variant="outlined" onClick={myfun2} className="button1"><AddIcon/></Button>
            <ul>
               {newItems.map((val)=>{
                   return  <List1
                       Itemval={val}
                   />
               })}
            </ul>
            </div>
           
        </div>
        
        </>
    )
}

export default TodoLIst;