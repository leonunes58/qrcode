import React from 'react';
import { useSelector } from 'react-redux';

import './DownloadQrCode.css';

import DownloadIcon from '../img/botao-de-download.png'

const DownloadQrCode = () => {
  const currentQrCode = useSelector(state => state.qrCodeReducer);
  console.log(currentQrCode.currentQrCode)
  console.log('=============')
  const imgQRCode = () => {
    if(currentQrCode.currentQrCode !== '') {
      return(
        <img src={currentQrCode.currentQrCode.qrcode} alt="QR code" className='img_qrcode'/>
      )
    } else {
      return(
        <strong className='msg_aviso'>Nenhum QR code Gerado</strong>
      )
    }
  }
  const downloadImg = () => {
    if(currentQrCode !== '') {
      return (
        <div>
          <a href={currentQrCode.currentQrCode.qrcode}>
            <button className='btn_download'>
              <img src={DownloadIcon} alt="Icon Download" className='icon_Download' />
              PNG
            </button>
          </a>
        </div>
      )
    } 
  }
  return (
    <div id='DownloadQrCode'>
      {imgQRCode()}
      {downloadImg()}
    </div>
  )
}

export default DownloadQrCode