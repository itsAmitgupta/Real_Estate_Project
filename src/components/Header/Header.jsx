import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
const Header = () => {
  const [menuOpened , setMenuOpened] = useState(false)
  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth <= 800){
      return { righr: !menuOpened && "-100%"}
    }
  }
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>
            <img src="./logo.png" alt="logo" width={100} />
            <div className="flexCenter h-menu" 
              style={getMenuStyles(menuOpened)}>
                <a href="">Residencies</a>
                <a href="">Our Values</a>
                <a href="">Contact us</a>
                <a href="">Get Started</a>
                <button className='button'>
                     <a href="">Contact</a>
                </button>
               
            </div>
            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=> !prev)}>
            <BiMenuAltRight size={30} />
        </div>
        </div>
    </section>
  )
}

export default Header