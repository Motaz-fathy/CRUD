import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter  , Route  , Routes } from 'react-router-dom'
import { Cart } from './pages/cart';

// pages import here 
import Home from './pages/Home'
import Login from './pages/Login';
import Notfound from './pages/Notfound';
import Profile  from './pages/Profile';
import Register from './pages/Register.js'
import { SingleProduct } from './pages/SingleProduct';


const  App =() =>{

const LoginReducer  = useSelector(state => state.LoginReducer)
const {user} = LoginReducer
  return (
    <div>
      <BrowserRouter>
      <Routes>   

   
      <Route path="/" element={<Home/>} exact></Route>
      <Route  path='/search/:keyword' exact element={<Home />} />
      <Route path='/search/' exact element={<Home />} />
      <Route path='/page/:pageNumber' exact element={<Home />} />
      <Route path='/search/:keyword/page/:pageNumber' exact element={<Home />} />
      {user ? 
      <Route path="/profile" exact element={<Profile />} ></Route>
      :   <Route path="/profile" exact element={<Notfound />} ></Route>
    }
      <Route path="/cart/:id?" exact element={<Cart />} ></Route>
      <Route path="/cart" exact element={<Cart />} ></Route>
      <Route path="/:id"  element={<SingleProduct />}  ></Route>
     
   
     <Route path="/" element={<Home/>} exact></Route>
      <Route  path='/search/:keyword' exact element={<Home />} />
      <Route path='/search/' exact element={<Home />} />
      <Route path='/page/:pageNumber' exact element={<Home />} />
      <Route path='/search/:keyword/page/:pageNumber' exact element={<Home />} />
      <Route path="/cart/:id?qty=:qty" exact element={<Cart />} ></Route>
      <Route path="/:id"  element={<SingleProduct />}  ></Route>
      <Route path="/register" exact element={<Register /> } ></Route>
      <Route path="/login" exact element={<Login />} ></Route>
     
      </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
