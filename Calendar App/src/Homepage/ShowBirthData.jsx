import { useState, useEffect } from "react";

function ShowBirthData({birthDate}){
  let [today , getToday] = useState("");
  let [days, getDays] = useState("");
  useEffect(()=>{
    getToday(new Date().toISOString().split('T')[0]);
  }, []);
  useEffect(()=>{
    let birth = new Date(birthDate);
    let present = new Date(today);
    getDays((present - birth)/ (1000*60*60*24));
  },[today]);
  return (
    <>
      {days}
    </>
  )
}

export default ShowBirthData;