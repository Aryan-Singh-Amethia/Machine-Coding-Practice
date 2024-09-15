import './App.css';
import Folder from './Components/Folder';


const data = [
  {
    "name": "React",
    "isFolder": true,
    "children": [
      {
        "name": "React-DOM",
        "isFolder": true,
        "children": [
          {
            "name": "ReactDOMServer",
            "isFolder": false,
            "children" : []
          }
        ]
      },
      {
        "name": "React-ART",
        "isFolder": false,
        "children" : []
      },
      {
        "name": "React-Three-Fiber",
        "isFolder": false,
        "children" : []
      }
    ]
  }
];

function App() {
  return (
    <div className="App">
      <Folder data={data} />
    </div>
  );
}

export default App;
