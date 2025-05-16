import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./ShowBirthData.css";

function ShowBirthData({birthDate}){
  let [present , getPresent] = useState(new Date());
  let [format, getFormat] = useState('');
  let [result, getResult] = useState("");
  let [birth, getBirth] = useState(new Date(birthDate));

  useEffect(()=>{
    let format = document.getElementById('format').value;
    getPresent(new Date());
    if(format === 'Days'){
      getResult((present - birth)/ (1000*60*60*24));
      getFormat("Days");
    }
    else if(format === 'Hours'){
      getResult((present - birth)/ (1000*60*60));
      getFormat("Hours");
    }
    else if(format === 'Minutes'){
      getResult((present - birth)/ (1000*60));
      getFormat("Minutes")
    }
    else if(format === 'Seconds'){
      getResult((present - birth)/ (1000));
      getFormat("Seconds");
    }
  },[new Date()]);

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
        <select name="format" id="format">
          <option value="Days">Days</option>
          <option value="Hours">Hours</option>
          <option value="Minutes">Minutes</option>
          <option value="Seconds">Seconds</option>
        </select>
        <Link to='/quotes'>
          <i class="fa-solid fa-trash" id="delete-button" onClick={deleteRecord}></i>
        </Link>
      </div>
    </div>
  )
}

export default ShowBirthData;