import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Component } from 'react';
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import { HomePage } from './pages/home-page/home-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { Authentications } from './pages/authentications/authentications.component';
import CheckoutPage from './pages/checkout/checkout.component';


class App extends Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                // console.log({'snapShot': userRef.data()});
                setCurrentUser({
                    id: userRef.id,
                    ...userRef.data()
                });
            } else setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return ( <div>
            <Header />
            <Routes>
                <Route path = ''
                element = { < HomePage /> }
                /> 
                <Route path = '/shop/*'
                element = { < ShopPage /> }
                /> 
                <Route path = '/checkout'
                element = { < CheckoutPage /> }
                /> 
                <Route path = '/signin'
                element = {
                    this.props.currentUser ?
                    ( < Navigate replace to = "/" /> ) :
                        ( < Authentications /> )
                }
                /> 
            </Routes > 
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);