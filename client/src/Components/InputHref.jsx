import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createQrCode } from '../Redux/qrCode/slice'
import './InputHref.css';
const InputHref = () => {
  const [word, setWord] = useState('');
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [urlSite, setUrlSite] = useState('');
  const [qrCode, setQrCode] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setQrCode
 (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor])


  const handleCreateQrCode = (e) => {
      e.preventDefault();
      setWord(urlSite);
      dispatch(createQrCode({
        qrcode: qrCode
      }))
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