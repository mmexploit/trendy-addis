import logo from './logo.svg';
import React from 'react';
import './App.css';
import { HomePage } from './components/pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-ins-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubsribeFromAuth = null

  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>  {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({ currentUser: userAuth });
      }

    })
  }

  componentWillUnmount () {
    this.unsubsribeFromAuth();
  }

  render () {
  return (
    <div className='App'>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInAndSignUp}/>
      </Switch>
    </div>
        
  );
  }
}

export default App;
