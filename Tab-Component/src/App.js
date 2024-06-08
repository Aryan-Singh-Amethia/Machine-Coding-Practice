import { useState } from 'react';
import './App.css';
import Tab from './Components/Tab.js';

function App() {

  const [ index , setIndex] = useState(0);
   
  return (
    <div>
      <Tab index={index} setIndex={setIndex}>
        <Tab.HeadsContainer>
             <Tab.HeadItem label={"Tab-1"} index={0}/>
             <Tab.HeadItem label={"Tab-2"} index={1}/>
             <Tab.HeadItem label={"Tab-3"} index={2}/>
        </Tab.HeadsContainer>
        <Tab.ContentContainer>
             <Tab.ContentItem index={0}>Content For Tab 1</Tab.ContentItem>
             <Tab.ContentItem index={1}>Content For Tab 2</Tab.ContentItem>
             <Tab.ContentItem index={2}>Content For Tab 3</Tab.ContentItem>        
        </Tab.ContentContainer>
      </Tab>
    </div>
  );
}

export default App;
