import React from 'react';
import './DownloadQrCode.css';
import qrcodeimg from '../img/gettyimages-828088276-612x612.jpg'
const DownloadQrCode = () => {
  return (
    <div id='DownloadQrCode'>
      <img src={qrcodeimg} alt="QR code" className='img_qrcode'/>
      <div>
        <button className='btn_download'>
          <img src="" alt="" />
          PNG
        </button>
        <button className='btn_download'>
          <img src="" alt="" />
          SVG
        </button>
      </div>
    </div>
  )
}

export default DownloadQrCode