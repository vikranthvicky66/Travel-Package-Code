import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TitleBar from './components/TitleBar/TitleBar';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import BookingPage from './components/BookingPage/BookingPage';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp';
import CommonSignIn from './components/CommonSignin/CommonSignin';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';


initializeIcons();

function App() {

  return (
    <>
      <Router className="main">
        <TitleBar/>
        <Switch> 
          <Route path="/places/:placeId">
            <BookingPage />
          </Route>
          <Route path="/login">
            <Login />
            <CommonSignIn/>
          </Route>
          <Route path="/signup">
            <SignUp />
            <CommonSignIn/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;