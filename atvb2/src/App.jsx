import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';

import './assets/css/normalize.css';
import './assets/css/global.css';
import { HomePage } from './pages/Home';
import { ViagensPage } from './pages/Viagens';

function App() {
  return (
    <div className="App">

      <Header />

      <main>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/viagens" element={<ViagensPage />} />
        </Routes>

      </main>

    </div>
  )
}

export default App