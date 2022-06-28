import React from 'react'
import './edit.css'
export const Edit = () => {
  return (
    <div>
        <form>
            <input  type={'text'} placeholder="domain"/>
            <input  type={'text'} placeholder="web_page"/>
            <input  type={'text'} placeholder="country"/>
            <input  type={'text'} placeholder="name"/>
            <input  type={'text'} placeholder="code"/>
            <input  type={'submit'} value="Add"/>
            
        </form>
    </div>
  )
}
