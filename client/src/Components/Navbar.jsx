//Import de bibliotecas
import React from 'react'
//Import do CSS
import './Navbar.css';

const Navbar = () => {
  return (
    <>
        <header id='header'>
            <nav>
                <a href="https://www.instagram.com/gaucho.dev/" className='instagram_perfil'>@gaucho.dev</a>
            </nav>
        </header>
    </>
  )
}

export default Navbar