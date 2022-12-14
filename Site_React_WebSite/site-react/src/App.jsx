import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../src/Pages/Home'

import './assets/css/normalize.css';
import './assets/css/Global.css';

function App() {
  return (
    <div className="App">

      <Header />

      <main>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </main>

    </div>
  )
}

export default App