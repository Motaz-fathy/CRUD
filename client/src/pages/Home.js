import React from 'react'
import {Edit} from '../components/edit'
import './home.css'
export const Home = () => {
  return (
    <div>
        <section className='board'>
            <div className='header'>
                <div className='logo'>CRUD</div>
                <div className='links'>motazfathy7@gmail.com</div>
            </div>
            <div className='homecontainer'>
                <div className='datashow'></div>
                <div className='space'></div>
                <div className='edit'>
                  <Edit />
                </div>
            </div>
        </section>
    </div>
  )
}
