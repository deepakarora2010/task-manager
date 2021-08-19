
import './App.css';
import { useState } from 'react';
import Header from "./components/Header.js"
import Button from "./components/Button"
import Tasks from "./components/Tasks"

function App() {
  const name='Deepakl'

  const [tasks, setstate] = useState([
    {
        id:1,
        description :"First Task",
        day: "01 January 2000",
        reminder : true,
    },
    {
        id:2,
        description :"second Task",
        day: "01 January 2020",
        reminder : true,
    },
    {
      id:3,
      description :"Third Task",
      day: "10 October 2020",
      reminder : true,
  }
])

  const onClick = (e) => {
    console.log(e)
}

  return (
    
    <div className='container'>
      <Header></Header>
      <Button text='Add' color='green' onClick = {onClick}/>
      <Tasks tasks={tasks}/>
    </div>

  );

}

export default App;
