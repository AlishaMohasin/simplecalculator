import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { ADD,DECREMENT,DIVIDE,INCREMENT, MULTIPLY , SUBTRACTION} from './action';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => (state));
  const [input, setinput] = useState("");
  const handlechange = (e) => {
    console.log(e.target.value);
    setinput(e.target.value)
  }
  return (
    <div className="App">
    
    
    
    
      <h1>value:{ state.count}</h1>
     
      <div>
      <button onClick={()=>dispatch(DECREMENT())}>DECREMENT</button>
        <button onClick={()=>dispatch(INCREMENT())}>INCREMENT</button>
      </div>
      <br></br>

      <input type="text" onChange={(e)=>handlechange(e)} />
      <div>
        <button onClick={() => dispatch(ADD(input))}>ADD</button>
        <button onClick={() => dispatch(MULTIPLY(input))}> MULTIPLY</button>
  
        <button onClick={() => dispatch(SUBTRACTION(input))}>SUBTRACT</button>
        <button onClick={() => dispatch(DIVIDE(input))}>DIVIDE</button>
      </div>
    
    
    
    
    
    
    
    
    </div>
  );
}

export default App;
