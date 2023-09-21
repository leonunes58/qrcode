import React from 'react';
import './InputHref.css';
const InputHref = () => {
  return (
    <>
      <h1>Crie seu QR code de uma maneira rápida e fácil!</h1>
      <input type="text" className='input_hrfc'/>
      <button type='submit'>Gerar QR Code</button>
    </>
  )
}

export default InputHref