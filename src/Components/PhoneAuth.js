import React, { Component } from 'react';
import firebaseConfig  from './firebaseConfig';
import * as firebaseui from "firebaseui";
import firebase from "firebase";

export default class PhoneAuth extends Component {
  componentDidMount() {
    const fbase = firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInSuccessUrl: "https://e-commerce-app-94f4d.web.app/", //This URL is used to return to that page when we got success response for phone authentication.
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      tosUrl: "https://e-commerce-app-94f4d.web.app/",
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    return (
      <div className="phone">
        {/* <h1>REACT PHONE AUTHENTICATION</h1> */}
        <div id="firebaseui-auth-container"></div>
      </div>
    )
  }
}

