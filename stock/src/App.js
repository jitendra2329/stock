import React, { useState } from 'react';


function Form({ onSubmit }) {
  const [symbol, setSymbol] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [timeWindow, setTimeWindow] = useState(10);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit({ symbol, socialMedia, timeWindow });
  // };


const data =  [
  { "date": "2023-05-01", "price": 134.08, "socialMediaCount": 1200 },
  { "date": "2023-05-02", "price": 137.05, "socialMediaCount": 1100 },
  { "date": "2023-05-03", "price": 139.32, "socialMediaCount": 950 },
  { "date": "2023-05-04", "price": 141.63, "socialMediaCount": 800 },
  { "date": "2023-05-05", "price": 144.12, "socialMediaCount": 900 },
  { "date": "2023-05-06", "price": 147.16, "socialMediaCount": 1000 },
  { "date": "2023-05-07", "price": 149.12, "socialMediaCount": 800 },
  { "date": "2023-05-09", "price": 151.94, "socialMediaCount": 600 }
 ]

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

    <table border={1}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Price</th>
              <th>S.M.count</th>
              <th>Reccomendation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.price}</td>
                <td>{item.socialMediaCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </center>

    
  );
}

export default Form