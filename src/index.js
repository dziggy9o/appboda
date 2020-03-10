import React from 'react';
import ReactDOM from 'react-dom';
import './tema/boda.scss';
import BodaVet from './bodavet';

//firebase
import Firebase, { FirebaseContext } from './komponente/auth/Firebase';

import * as serviceWorker from './serviceWorker';



ReactDOM.render(
<FirebaseContext.Provider value={new Firebase()}>
    <BodaVet />
</FirebaseContext.Provider>,
 document.getElementById('hraniva'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
