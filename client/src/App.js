import React from 'react';
import {BrowserRouter  , Route  , Routes } from 'react-router-dom'
import { Home } from './pages/Home';


const  App =() =>{

  return (
    <div>
      <BrowserRouter>
      <Routes>   

      <Route  path='/search/:keyword' exact element={<Home />} />
      <Route path='/search/' exact element={<Home />} />
      <Route path='/page/:pageNumber' exact element={<Home />} />
      <Route path='/search/:keyword/page/:pageNumber' exact element={<Home />} />
      <Route path="/" element={<Home/>} exact></Route>
      <Route path="/:id" element={<Home/>} exact></Route>
      
      </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
