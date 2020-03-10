import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import {Navigacija, NavigacijaMob, Futer, Pocetna, Home, IzracunavanjeHraniva, Onama, SignIn, SignUp, PwForget, Nalog, Admin, Iskustva, Analize} from './komponente';

import * as RUTE from './komponente/auth/routes';
import { withAuthentication } from './komponente/auth/sesija';


const BodaVet = () => (
             <Router>
                 <div id="page-wrapper">
                    <Navigacija/>
                    <Route exact path={RUTE.LANDING} component={Pocetna} />
                    <Route path={RUTE.SIGN_UP} component={SignUp} />
                    <Route path={RUTE.SIGN_IN} component={SignIn} />
                    <Route path={RUTE.PASSWORD_FORGET} component={PwForget} />
                    <Route path={RUTE.HOME} component={Home} />
                    <Route path={RUTE.ACCOUNT} component={Nalog} />
                    <Route path={RUTE.ADMIN} component={Admin} />
                    <Route path={RUTE.IZRHRANIVA} component={IzracunavanjeHraniva} />
                    <Route path={RUTE.O_NAMA} component={Onama} />
                    <Route path={RUTE.ISKUSTVA} component={Iskustva} />
                    <Route path={RUTE.ANALIZE} component={Analize} />
                    <Futer />
                 </div>
                 <NavigacijaMob />
            </Router>
);

export default withAuthentication(BodaVet);