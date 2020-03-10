import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import SignOut from './auth/signout';
import * as RUTE from './auth/routes';

import { LogoMob } from '../tema/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';

import { AuthUserContext } from './auth/sesija';

class NavigacijaMob extends Component {
    constructor(props){
    super(props);
    this.state = {
        klik: false
    };
    }
    kliknuo = () => {
        if (this.state.klik === false) {
            document.body.classList.add('navPanel-visible');
            this.setState({klik: true})
        }
        else {
            document.body.classList.remove('navPanel-visible');
            this.setState({klik: false})
        }
    }

    render() {
    
        return (
        <div>
            <div id="titleBar">
                <a href="#navPanel" onClick={this.kliknuo.bind(this)} className="toggle">
                    <FontAwesomeIcon icon={faBars} />
                </a>
                <span className="title">
                    <Link to={RUTE.LANDING}><img alt='BodaVet Logo' src={LogoMob} /></Link>
                </span>
            </div>
            <div id='navPanel'>
            <AuthUserContext.Consumer>
                {authUser => 
                    authUser ? <NavigacijaOn  klik={this.kliknuo.bind(this)} /> : <NavigacijaOff  klik={this.kliknuo.bind(this)}/>
                }  
            </AuthUserContext.Consumer>
            </div>
        </div>
        )
    }
}
    


const NavigacijaOn = (props) => (
    
        <nav onClick={props.klik}>
                <Link className='link depth-0' to={RUTE.IZRHRANIVA}>Izracunavanje hraniva</Link>
                <Link className='link depth-0' to={RUTE.O_NAMA}>O nama</Link>
                <Link className='link depth-0' to={RUTE.USLUGE}>Usluge</Link>
                <Link className='link depth-0' to={RUTE.ANALIZE}>Analize</Link>
                <Link className='link depth-0' to={RUTE.ISKUSTVA}>Iskustva</Link>
                <Link className='link depth-0' to={RUTE.KONTAKT}>Kontakt</Link>          
                <SignOut />
        </nav>
);
const NavigacijaOff = (props) => (
    <nav onClick={props.klik}>
            <Link className='link depth-0' to={RUTE.O_NAMA}>O nama</Link>
            <Link className='link depth-0' to={RUTE.USLUGE}>Usluge</Link>
            <Link className='link depth-0' to={RUTE.ANALIZE}>Analize</Link>
            <Link className='link depth-0' to={RUTE.ISKUSTVA}>Iskustva</Link>
            <Link className='link depth-0' to={RUTE.KONTAKT}>Kontakt</Link>
            <Link className="button primary"  to={RUTE.SIGN_IN}><FontAwesomeIcon icon={faSignInAlt}/></Link>
    </nav>
);
export default NavigacijaMob;