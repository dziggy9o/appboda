import React from 'react';
import { Link } from 'react-router-dom';

import SignOut from './auth/signout';
import * as RUTE from './auth/routes';

import { LogoWeb } from '../tema/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import { AuthUserContext } from './auth/sesija';

const Navigacija = () => (
    <header id="header">
        <h1 id="logo"><Link to='/'><img alt='BodaVet logo' src={LogoWeb}/></Link></h1>
        <nav id="nav">
        <AuthUserContext.Consumer>
            {authUser => 
                authUser ? <NavigacijaOn /> : <NavigacijaOff />
            }  
        </AuthUserContext.Consumer>          
        </nav>
    </header>
)

const NavigacijaOn = () => (
    
        <ul>
            <li>
                <Link to={RUTE.IZRHRANIVA}>Izracunavanje hraniva</Link>
            </li>
            <li>
                <Link to={RUTE.O_NAMA}>O nama</Link>
            </li>
            <li>
                <Link to={RUTE.USLUGE}>Usluge</Link>
            </li>
            <li>
                <Link to={RUTE.ANALIZE}>Analize</Link>
            </li>
            <li>
                <Link to={RUTE.ISKUSTVA}>Iskustva</Link>
            </li>
            <li>
                <Link to={RUTE.KONTAKT}>Kontakt</Link>
            </li>
            
                <SignOut />
            
        </ul>
);
const NavigacijaOff = () => (
    <ul>
        <li>
            <Link to={RUTE.O_NAMA}>O nama</Link>
        </li>
        <li>
            <Link to={RUTE.USLUGE}>Usluge</Link>
        </li>
        <li>
            <Link to={RUTE.ANALIZE}>Analize</Link>
        </li>
        <li>
            <Link to={RUTE.ISKUSTVA}>Iskustva</Link>
        </li>
        <li>
            <Link to={RUTE.KONTAKT}>Kontakt</Link>
        </li>
        <li>
            <Link className="button" to={RUTE.SIGN_IN}><FontAwesomeIcon icon={faSignInAlt}/></Link>
        </li>
    </ul>
);
export default Navigacija;