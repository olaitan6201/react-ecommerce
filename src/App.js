import './App.css';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/home-page/home-page.component';
import ShopPage from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { Authentications } from './pages/authentications/authentications.component';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='' element={<HomePage />}/>
        <Route path='/shop' element={<ShopPage />}/>
        <Route path='/signin' element={<Authentications />}/>
      </Routes>
    </div>
  );
}

export default App;
