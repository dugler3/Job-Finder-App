import { Route, Routes } from 'react-router-dom';
import Work from './pages/Work';
import Career from './pages/Career';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Search from './components/layout/Search';
import Offer from './pages/Offer';
import NoPageFound from './pages/NoPageFound';

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/praca/" exact element={<Work />} />
        <Route path="/kariera" element={<Career />} />
        <Route path="/praca/:id" element={<Offer />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
