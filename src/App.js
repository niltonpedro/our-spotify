import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Faq from './pages/Faq/Faq'
import Navbar from './components/Menu/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
