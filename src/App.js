import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Faq from './pages/Faq/Faq';
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import Navbar from './components/Menu/Navbar';
import Playlist from './pages/Playlist/Playlist';

<<<<<<< HEAD
import Footer from './components/Footer/Footer';
=======
import Playlist from './pages/Playlist/Playlist';
>>>>>>> main

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/Inscrever-se' element={<RegistrationForm/>} />

<<<<<<< HEAD
        <Route path='/Inscrever-se' element={<RegistrationForm/>} />
=======
        <Route path='/playlist' element={<Playlist />} />
>>>>>>> main
      </Routes>
      <Footer />
    </>
  );
}

export default App;
