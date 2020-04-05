import React from "react";
import Tweets from "./components/Tweets/tweets";
import Login from "./components/Login/login";
import MyTweets from "./components/Tweets/mytweets";
import Menu from "./components/Menu/menu";
import SignUp from "./components/SignUp/signup";
import NewTweet from "./components/Tweets/NewTweet/newtweet";
import firebase from "firebase/app";
import "firebase/auth";
import { Switch, Router, Route } from "react-router-dom";
import history from "./history";
import { connect } from "react-redux";
import { isLoggedIn } from "./actions";

class App extends React.Component {
  UNSAFE_componentWillMount() {
    const firebaseConfig = {
      //Kendi keylerinizi buraya yazın.
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    this.props.isLoggedIn();
  }

  render() {
    return (
      <Router history={history}>
        <Menu />
        <Switch>
          <Route path="/" exact component={Tweets} />
          <Route path="/login" exact component={Login} />
          <Route path="/mytweets" exact component={MyTweets} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/newtweet" exact component={NewTweet} />
          <Route path="/edittweet" exact component={NewTweet} />
        </Switch>
      </Router>
    );
  }
}

export default connect(null, { isLoggedIn })(App);
