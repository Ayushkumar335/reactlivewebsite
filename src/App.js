import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
const App= () =>{




  return <>
  <div className="main">
  <div class="centerDiv">
<br/>
   <h1>ayush kumar  </h1>
<br/>
<input placeholder="add Items" />
<Button class="btn"><AddRoundedIcon/></Button>
<ul>
  {/* <li>hello</li>
  <li>hello</li>
  <li>hello</li>


  <li>hello</li> */}

</ul>
 </div>
  </div>
  
  </>
}
export default  App;