import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Birth from '../Birth/Birth';
import Quotes from '../Quotes/Quotes';

function Homepage(){
  return (
    <BrowserRouter>
      <div></div>
      <Routes>
        <Route path='/' element={<Birth/>}></Route>
        <Route path='/quotes' element={<Quotes/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Homepage;