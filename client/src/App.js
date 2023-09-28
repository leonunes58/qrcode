//Import de Componentes
import { DownloadQrCode, InputHref, Navbar } from './Components';
//Import de bibliotecas
import { useDispatch } from 'react-redux';
import { home } from './Redux/qrCode/slice'
import { useEffect } from 'react';
//Import do CSS
import './App.css';

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
