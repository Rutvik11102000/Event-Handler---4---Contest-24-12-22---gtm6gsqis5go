import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleDoubleClick = (event) =>{
    switch(event.detail){
      case 1:{
        console.log("single click")
      }
      case 2:{
        console.log("double click")
      }
      default:{
        break
      }
    }
  
  }
  return (
    <div id="main">
      <button onClick={handleDoubleClick} id="dblclick-btn">Double click me</button>
    </div>
  )
}


export default App;
