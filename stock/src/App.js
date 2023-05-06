import React, { useState } from 'react';


function Form({ onSubmit }) {
  const [symbol, setSymbol] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [timeWindow, setTimeWindow] = useState(10);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit({ symbol, socialMedia, timeWindow });
  // };

  return (
    <center>
    <div  className="container">
    <form>
      <label>
        
       <h1>Welcome to Stock!</h1> 
    
        <select className="stock1" value={timeWindow} onChange={(e) => setTimeWindow(e.target.value)}>
          <option value="Stock1">Stock 1</option>
          <option value="Stock2">Stock 2</option>
          <option value="Stock3">Stock 3</option>
          <option value="Stock4">Stock 4</option>
        </select>
        <select className="stock2" value={timeWindow}>
          <option value={7}>7 </option>
          <option value={10}>10 </option>
          <option value={14}>14 </option>
        </select>
      </label>
      <br/>
      <button type="submit" >Submit</button>
    </form>
    </div>
    </center>
  );
}

export default Form