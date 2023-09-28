//Import de bibliotecas
import React from 'react';
import { useSelector } from 'react-redux';
import { saveAs } from 'file-saver';
//Import de Imagens CSS
import './DownloadQrCode.css';
//Import de Imagens
import DownloadIcon from '../img/botao-de-download.png'

const DownloadQrCode = () => {
  const currentQrCode = useSelector(state => state.qrCodeReducer);

  const download = (typeFile) => {
    typeFile === 'png' ? saveAs(currentQrCode.currentQrCode.qrcode, 'qrcode.png') : saveAs(currentQrCode.currentQrCode.qrcode, 'qrcode.jpg');
  };
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
  };
  const downloadImg = () => {
    if(currentQrCode !== '') {
      return (
        <div>
          <button className='btn_download' onClick={() => download('png')}>
            <img src={DownloadIcon} alt="Icon Download" className='icon_Download'/>
            PNG
          </button>
          <button className='btn_download' onClick={() => download('jpg')}>
            <img src={DownloadIcon} alt="Icon Download" className='icon_Download'/>
            JPG
          </button>
        </div>
      )
    } 
  };
  return (
    <div id='DownloadQrCode'>
      {imgQRCode()}
      {downloadImg()}
    </div>
  )
}

export default DownloadQrCode