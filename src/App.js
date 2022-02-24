import './App.css';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/home-page/home-page.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return <div>
    {/* <HomePage /> */}
    <Routes>
      <Route path='' element={<HomePage />}/>
      <Route path='/shop' element={<ShopPage />}/>
    </Routes>
  </div>;
}

export default App;
