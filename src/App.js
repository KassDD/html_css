import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MainForm from './MainForm'
import NotFound from './NotFound'
import Header from './Header'
import Footer from './Footer'

import './App.sass'
import './layout.sass'

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main_main'>
        <Routes>
          <Route path='/' element={<MainForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
