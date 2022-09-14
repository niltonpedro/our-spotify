import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Faq from './pages/Faq/Faq'
import MenuHeader from './components/Menu/MenuHeader';

function App() {
  return (
    <>
    <MenuHeader></MenuHeader>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/faq' element={<Faq />}  />
    </Routes>
    </>
  );
}

export default App;
