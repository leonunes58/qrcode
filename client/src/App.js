import './App.css';

import { DownloadQrCode, InputHref, Navbar } from './Components';
import { useDispatch } from 'react-redux';
import { home } from './Redux/qrCode/slice'
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(home())
  }, [])
  
  return (
    <div className="App">
      <Navbar />
      <article id='container_main'>
        <section>
          <InputHref />
        </section>
        <section>
          <DownloadQrCode />
        </section>
      </article>
    </div>
  );
}

export default App;
