import logo from './logo.svg';
import React from 'react';
import './App.css';
import { HomePage } from './components/pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom'
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckoutPage from './components/pages/checkout/checkout.component';
import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-ins-and-sign-up.component';
import Footer from './components/pages/homepage/footer.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import {createStructuredSelector} from 'reselect'

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';



class App extends React.Component {

  unsubsribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>  {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          })
      } else {
        setCurrentUser(userAuth);
      }

    })
  }

  componentWillUnmount () {
    this.unsubsribeFromAuth();
  }

  render () {
  return (
    <div className='App'>
      <Header />
      
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp/>)}/>
        <Route exact path="/checkout" component={CheckoutPage}/>
      </Switch>

      <Footer/>
    </div>
        
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect( 
  mapStateToProps,
  mapDispatchToProps
  )(App);
