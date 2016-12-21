import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
    apiKey: "AIzaSyDUQMwZVFJjwyToBgg-QnZkX1Gz9uwH0ww",
    authDomain: "myorderlist-47990.firebaseapp.com",
    databaseURL: "https://myorderlist-47990.firebaseio.com",
    storageBucket: "myorderlist-47990.appspot.com",
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
