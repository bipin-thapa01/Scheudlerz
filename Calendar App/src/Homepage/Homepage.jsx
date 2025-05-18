import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Birth from '../Birth/Birth';
import Quotes from '../Quotes/Quotes';
import './Homepage.css';

function Homepage(){
  let [presentUrl, getPresentUrl] = useState('');
  setInterval(()=>{
    getPresentUrl(window.location.href);
  },10);
  useEffect(()=>{
    if(presentUrl === '' || presentUrl === 'https://birthcalcz.netlify.app/'){
      document.querySelector('.link1').style.backgroundColor = 'gray';
      document.querySelector('.link2').style.backgroundColor = '#282828';
    }
    else{
      document.querySelector('.link1').style.backgroundColor = '#282828';
      document.querySelector('.link2').style.backgroundColor = 'gray';
    }
  },[presentUrl]);
  return (
    <div id="main-container">
    <BrowserRouter>
      <div id='link-container'>
        <Link className='link link1' to='/'>Birth Data</Link>
        <Link className='link link2' to='/quotes'>Quotes</Link>
      </div>
      <Routes>
        <Route path='/' element={<Birth/>}></Route>
        <Route path='/quotes' element={<Quotes/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default Homepage;