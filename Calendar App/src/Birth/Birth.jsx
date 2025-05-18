import { useState, useEffect } from "react";
import AddBirth from "./AddBirth";
import ShowBirthData from "./ShowBirthData";

function Homepage() {
  let [birthDate, getBirthDate] = useState("");
  useEffect(()=>{
    getBirthDate(localStorage.getItem('birthData'));
  }, []);
  let content = (birthDate === null || birthDate === "") ? <AddBirth getBirthDate={getBirthDate}/> : <ShowBirthData birthDate = {birthDate} getBirthDate = {getBirthDate}/>;
  return (
    <>
      {content}
    </>
  )
}

export default Homepage;