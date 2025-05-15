import { useState, useEffect } from "react";
import "./ShowBirthData.css";

function ShowBirthData({birthDate}){
  let [present , getPresent] = useState(new Date());
  let [format, getFormat] = useState('');
  let [result, getResult] = useState("");
  let [birth, getBirth] = useState(new Date(birthDate));

  useEffect(()=>{
    getResult((present - birth)/ (1000*60*60*24));
  },[present, birth]);

  function changeFormat(){
    let format = document.getElementById('format').value;
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
  }

  return (
    <div id="result-container">
      <div id="result">{Math.ceil(result) + " " + format}</div>
      <select name="format" id="format">
        <option value="Days">Days</option>
        <option value="Hours">Hours</option>
        <option value="Minutes">Minutes</option>
        <option value="Seconds">Seconds</option>
      </select>
      <button id="submit-format" onClick={()=>{changeFormat()}}>Change</button>
    </div>
  )
}

export default ShowBirthData;