import {Header} from './components/Header'
import { Footer } from './components/Footer'
import {Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import './assets/css/normalize.css';
import './assets/css/Global.css';
function  App() {
  return(
    <div className="App">

    <Header />


    <main>
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>

    </main>

    <Footer />

    </div>
  )
}

export default App