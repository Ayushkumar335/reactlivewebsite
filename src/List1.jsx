import React, { useState } from "react"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const List1 = (props) => {
    const [line,setChange]=useState(false);
const myfun= () => {
    setChange(true)
}

return  (<>
<div className="todoL">
<span >
<DeleteOutlineIcon onClick={myfun} className="deleteIcon"/>
</span>
<li style={{textDecoration: line?'line-through':'none'}}>{props.Itemval}</li>
</div>

</>
)
}

export default List1;