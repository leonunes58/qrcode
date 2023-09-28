//Import de bibliotecas
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createQrCode } from '../Redux/qrCode/slice'
//Import do CSS
import './InputHref.css';

const InputHref = () => {
  const [word, setWord] = useState('');
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [urlSite, setUrlSite] = useState(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`);
  const [qrCode, setQrCode] = useState('');

  const dispatch = useDispatch()

  useEffect(() => {
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`);
    setWord(urlSite);
  }, [word, urlSite, size, bgColor])

  const generationQrCode = () => {
    dispatch(createQrCode({
      qrcode: qrCode
    }))
  }
  const handleCreateQrCode = (e) => {
      e.preventDefault();
      const verification = word.split(':')[0];
      verification === 'https' ? generationQrCode() : alert('O link que você está tentando gerar um QR code é inválido');
  }
  return (
    <>
      <h1 className='title-main'>Crie seu QR code de uma maneira rápida e fácil!</h1>
      <form onSubmit={handleCreateQrCode}>
        <input type="text" className='input_hrfc' placeholder='https://' onChange={(e) => setUrlSite(e.target.value)}/>
        <button type='submit' className='btn-generation' >Gerar QR Code</button>
      </form>
     
    </>
  )
}

export default InputHref