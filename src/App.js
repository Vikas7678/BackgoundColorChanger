import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('red');
  return (
    <div style={{backgroundColor: color, width: "100vw", height: "100vh", display: "flex"}}>
      <div className='Buttons'>
        <button style={{backgroundColor: "red", border: "none", borderRadius: "10px", paddingLeft: "15px", paddingRight: "15px",paddingTop: "5px",paddingBottom: "5px"}} onClick={() => setColor('red')}>Red</button>
        <button style={{backgroundColor: "green", border: "none", borderRadius: "10px", paddingLeft: "15px", paddingRight: "15px",paddingTop: "5px",paddingBottom: "5px"}} onClick={() => setColor('green')}>Green</button>
        <button style={{backgroundColor: "white", border: "none", borderRadius: "10px", paddingLeft: "15px", paddingRight: "15px",paddingTop: "5px",paddingBottom: "5px"}} onClick={() => setColor('white')}>White</button>
        <button style={{backgroundColor: "black", color: "white", border: "none", borderRadius: "10px", paddingLeft: "15px", paddingRight: "15px",paddingTop: "5px",paddingBottom: "5px"}} onClick={() => setColor('black')}>Black</button>
        <button style={{backgroundColor: "olive", border: "none", borderRadius: "10px", paddingLeft: "15px", paddingRight: "15px",paddingTop: "5px",paddingBottom: "5px"}} onClick={() => setColor('olive')}>Olive</button>
      </div>
    </div>
  );
}

export default App;
