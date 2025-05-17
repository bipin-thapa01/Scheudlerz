import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import AddBirth from "./AddBirth";
import "./ShowBirthData.css";

function ShowBirthData({birthDate}){
  let [format, getFormat] = useState("Days");
  let [birth, getBirth] = useState(new Date(birthDate));
  let [result, getResult] = useState((new Date() - birth)/ (1000*60*60*24));

  useEffect(() => {
    let interval;
    if (format === "Seconds") {
      interval = setInterval(() => {
        getResult(prev => prev + 1);
      }, 1000);
    } 
    else if (format === "Minutes") {
      interval = setInterval(() => {
        getResult(prev => prev + 1);
      }, 60000);
    }

    return () => clearInterval(interval);
  }, [format]);

  const changeFormat = (event) => {
    let newFormat = event.target.value;
    getFormat(newFormat);
    let divisor = newFormat === "Days" ? 1000 * 60 * 60 * 24
                : newFormat === "Hours" ? 1000 * 60 * 60
                : newFormat === "Minutes" ? 1000 * 60
                : 1000;
  
    getResult((new Date() - birth) / divisor);
  };

  const deleteRecord = ()=>{
    localStorage.removeItem('birthData');
    
  };

  return (
    <div id="result-container">
      <div id="result-text-container">
        <div id="result-number">{Math.ceil(result)}</div>
        <div id="result-metric">{' ' + format}</div>
      </div>
      <div id="normal-text">has passed since you were born</div>
      <div id="format-and-delete-container">
        <select name="format" id="format" onChange={changeFormat}>
          <option value="Days">Days</option>
          <option value="Hours">Hours</option>
          <option value="Minutes">Minutes</option>
          <option value="Seconds">Seconds</option>
        </select>
        <i class="fa-solid fa-trash" id="delete-button" onClick={deleteRecord}></i>
      </div>
    </div>
  )
}

export default ShowBirthData;