import app from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBdIU55sUfhsKhFrUFBbhP17RNMB3UgvSo",
    authDomain: "bodaapp-f46f6.firebaseapp.com",
    databaseURL: "https://bodaapp-f46f6.firebaseio.com",
    projectId: "bodaapp-f46f6",
    storageBucket: "bodaapp-f46f6.appspot.com",
    messagingSenderId: "8018663692",
    appId: "1:8018663692:web:6690e341673d43356dd129",
    measurementId: "G-QKCCD693H4",
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }
    //Auth API 
    //Kreiranje naloga
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
    //Login
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    //user api

    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}

export default Firebase;