import { Route, Routes } from 'react-router-dom';
import OfferListPage from './pages/OfferListPage';
import CareerPage from './pages/CareerPage';
import HomePage from './pages/HomePage';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Search from './components/layout/Search/Search';
import OfferPage from './pages/OfferPage';
import NoPageFound from './pages/NoPageFound';

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/praca" element={<OfferListPage />} />
        <Route path="/kariera" element={<CareerPage />} />
        <Route path="/praca?id=:id" element={<OfferPage />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
