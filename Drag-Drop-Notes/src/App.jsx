import './App.css';
import Notes from './components/Notes';
import { useState } from 'react';

function App() {


  const NOTES = [
    {
      id: 1,
      content : "HTML is easy",
    },
    {
      id: 2,
      content : "Browser can execute only Javascript",
    },
    {
      id: 3,
      content : "Most important language to learn",
    }
  ];

  const [ notes , setNotes ] = useState(NOTES);

  return(<div>
    <Notes notes = {notes} setNotes={setNotes}/>
  </div>);

 
}

export default App;
