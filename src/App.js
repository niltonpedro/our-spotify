import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Faq from './pages/Faq/Faq';
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import Navbar from './components/Menu/Navbar';
import Playlist from './pages/Playlist/Playlist';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/Inscrever-se' element={<RegistrationForm />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
