import { Route, Routes } from 'react-router-dom';
import OfferListPage from './pages/OfferListPage';
import BookmarkPage from './pages/BookmarksPage';
import HomePage from './pages/HomePage';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import OfferPage from './pages/OfferPage';
import NoPageFound from './pages/NoPageFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/offers" element={<OfferListPage />} />
        <Route path="/bookmarks" element={<BookmarkPage />} />
        <Route path="/offers/:id" element={<OfferPage />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
