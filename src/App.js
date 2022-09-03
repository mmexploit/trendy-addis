import logo from './logo.svg';
import React from 'react';
import './App.css';
import { HomePage } from './components/pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom'
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-ins-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions';


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
      </Switch>
    </div>
        
  );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect( 
  mapStateToProps,
  mapDispatchToProps
  )(App);
