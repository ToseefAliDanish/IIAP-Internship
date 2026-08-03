import {useState} from'react';
import './App.css';

const App = () => {
   const [count, setCount] = useState(0);

   const handleIncrement = () => {
    setCount(count + 1);
   };

   const handleDecrement = () => {
    setCount(count - 1);
   };
    return (
      <div className='app-container'>
        <div className='countainer-card'>
          <h2> React State Counter Day1 </h2>
          <h1>{count}</h1>
          <div className="button-group">
          <button className="btn-dec" onClick={handleDecrement}>
            Decrement
          </button>
          
          <button className="btn-inc" onClick={handleIncrement}>
            Increment
          </button>
          </div>
        </div>
      </div>
    );
};

export default App;