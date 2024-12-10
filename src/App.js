import './App.css';
import Header from './UI/components/Header';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import CustomFooter from './UI/components/Footer.jsx';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage'; // Assuming MainPage is your main page component
import CatalogPage from './CatalogPage'; // Assuming CatalogPage is your catalog page component
import ArtistsPage from './ArtistsPage'; // Assuming ArtistsPage is your artists page component
import ContactPage from './ContactPage'; // Assuming ContactPage is your contact page component
import Container from '@mui/material/Container'


function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSnackOpen, setSnackOpen] = useState(false);
  const basket = useSelector(state => state.carts.basket);

  const carts = useSelector(state => state.carts.carts);
  const cartsAbstr = useSelector(state => state.carts.cartsAbstr);
  const cartsImpr = useSelector(state => state.carts.cartsImpr);
  const cartsMin = useSelector(state => state.carts.cartsMin);
  const cartsNatur = useSelector(state => state.carts.cartsNatur);
  const cartsReal = useSelector(state => state.carts.cartsReal);
  const cartsSimv = useSelector(state => state.carts.cartsSimv);
  const cartsPeizash = useSelector(state => state.carts.cartsPeizash);


  return (
    <div style={{
      minHeight: '100vh', // Устанавливаем минимальную высоту контейнера равной высоте вьюпорта
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // Располагаем элементы так, чтобы футер был прижат к нижней части
    }}>
      <Router>
        <Header />
        <Routes><Route path='/main' element={<MainPage />} /></Routes>
        <Routes><Route path='/' element={<MainPage />} /></Routes>

        <Container sx={{ marginTop: '70px' }} >
          <Routes>
            <Route path='/catalog' element={<CatalogPage carts={carts} setSnackOpen={setSnackOpen} />} />
            <Route path='/artists' element={<ArtistsPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/catalog/abstr' element={<CatalogPage carts={cartsAbstr} setSnackOpen={setSnackOpen} />} />
            <Route path='/catalog/realizm' element={<CatalogPage carts={cartsReal} setSnackOpen={setSnackOpen} />} />
            <Route path='/catalog/impressionizm'  element={<CatalogPage carts={cartsImpr} setSnackOpen={setSnackOpen} />}  />
            <Route path='/catalog/peizash'  element={<CatalogPage carts={cartsPeizash} setSnackOpen={setSnackOpen} />}  />
            <Route path='/catalog/minimalizm'  element={<CatalogPage carts={cartsMin} setSnackOpen={setSnackOpen} />} />
            <Route path='/catalog/naturmort'  element={<CatalogPage carts={cartsNatur} setSnackOpen={setSnackOpen} />} />
            <Route path='/catalog/simvolizm'  element={<CatalogPage carts={cartsSimv} setSnackOpen={setSnackOpen} />} />
          </Routes>

        </Container>
      </Router>

      <CustomFooter />
    </div>
  );
}

export default App;
