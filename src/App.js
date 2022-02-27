import './App.css';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/home-page/home-page.component';
import ShopPage from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { Authentications } from './pages/authentications/authentications.component';
import { auth } from './firebase/firebase.util';
import { Component } from 'react';


class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route path='' element={<HomePage />}/>
          <Route path='/shop' element={<ShopPage />}/>
          <Route path='/signin' element={<Authentications />}/>
        </Routes>
      </div>
    );
  }
}

export default App;
