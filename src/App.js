import './App.css';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { HomePage } from './pages/home-page/home-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { Authentications } from './pages/authentications/authentications.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { Component } from 'react';
import { setCurrentUser } from './redux/user/user.actions';


class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        // console.log({'snapShot': userRef.data()});
        setCurrentUser({
            id: userRef.id,
            ...userRef.data()
        });
      }

      else setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header/>
        <Routes>
          <Route path='' element={<HomePage />}/>
          <Route path='/shop' element={<ShopPage />}/>
          <Route path='/signin' element={<Authentications />}/>
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
