import React from 'react';
import { useSelector } from 'react-redux';

import './DownloadQrCode.css';

import DownloadIcon from '../img/botao-de-download.png'

const DownloadQrCode = () => {
  const currentQrCode = useSelector(state => state.qrCodeReducer);
  const imgQRCode = () => {
    if(currentQrCode) {
      return(
        <img src={currentQrCode.currentQrCode.qrcode} alt="QR code" className='img_qrcode'/>
      )
    } else {
      return(
        <p>Não possui nenhum QR code gerado</p>
      )
    }
  }
  return (
    <div id='DownloadQrCode'>
      {imgQRCode()}
      <div>
        <a href={currentQrCode.currentQrCode.qrcode}>
          <button className='btn_download'>
            <img src={DownloadIcon} alt="Icon Download" className='icon_Download' />
            PNG
          </button>
        </a>
        
      </div>
    </div>
  )
}

export default DownloadQrCode