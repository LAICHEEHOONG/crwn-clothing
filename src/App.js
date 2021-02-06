import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css';








class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log('component did mount');
   
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);

        })

      }

      this.setState({ currentUser: userAuth });

    });

  }

  componentWillUnmount() {
    console.log(`component will unmount`)
    this.unsubscribeFromAuth();
  }


  render() {
    console.log('render')


    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }


}

export default App;


//git add -A
//git commit -m ""
//git push origin main