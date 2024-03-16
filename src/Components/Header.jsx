import React from 'react'
import '../assets/Header.css'

const data = [
  {text:"Ongoing Event"},
  {text:"Subscribed Event"},
  {text:"Hosted Events"},
  {text:"Help & Support"},
  {text:"Settings"}
];

function Header() {
  
  return (
    <nav className='headerContainer'>

        <img className='logo' src='Swiggy_logo.svg.png'/> 

        {data.map((val) => {
          return <div key={val.text}>
            <div>{val.text}</div>
          </div>
        })}

    </nav>
  )
}

export default Header