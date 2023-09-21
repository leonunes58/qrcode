import './App.css';

import { DownloadQrCode, InputHref, Navbar } from './Components';

function App() {
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
