import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { HomePage } from './components/pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom'
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckoutPage from './components/pages/checkout/checkout.component';
import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-ins-and-sign-up.component';
import Footer from './components/pages/homepage/footer.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';



const App = ( ) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  let unsubsribeFromAuth = null

  useEffect(() => {
      unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot =>  {
            dispatch(setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              }));
            })
        } else {
          dispatch(setCurrentUser(userAuth));
        }

      })

      return () => {
        unsubsribeFromAuth()
      }
  }, [dispatch])
    

  return (
    <div className='App'>
      <Header />
      
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp/>)}/>
        <Route exact path="/checkout" component={CheckoutPage}/>
      </Switch>

      <Footer/>
    </div>
        
  );
  }

export default App;
