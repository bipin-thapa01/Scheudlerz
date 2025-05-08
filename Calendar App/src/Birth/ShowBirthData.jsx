import { useState, useEffect } from "react";

function ShowBirthData({birthDate}){
  let [present , getPresent] = useState(new Date());
  let [result, getResult] = useState("");
  let [birth, getBirth] = useState(new Date(birthDate));

  useEffect(()=>{
    getResult((present - birth)/ (1000*60*60*24));
  },[present, birth]);

  function changeFormat(){
    let format = document.getElementById('format').value;
    if(format === 'Days'){
      getResult((present - birth)/ (1000*60*60*24));
    }
    else if(format === 'Hours'){
      getResult((present - birth)/ (1000*60*60));
    }
    else if(format === 'Minutes'){
      getResult((present - birth)/ (1000*60));
    }
    else if(format === 'Seconds'){
      getResult((present - birth)/ (1000));
    }
  }

  return (
    <>
      {Math.ceil(result)}
      <select name="format" id="format">
        <option value="Days">Days</option>
        <option value="Hours">Hours</option>
        <option value="Minutes">Minutes</option>
        <option value="Seconds">Seconds</option>
      </select>
      <button id="submit-format" onClick={()=>{changeFormat()}}>submit</button>
    </>
  )
}

export default ShowBirthData;