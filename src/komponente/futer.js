import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {LogoMob} from '../tema/logo';
import {IR} from '../tema/ikone';

const datum = new Date();
const trenutnaGodina = datum.getFullYear();

const Futer = () => (
    <footer id="futer">
                <div className="copyright">
                    <div>
                        <Link to="/o-nama">
                        <FontAwesomeIcon icon={faFacebookSquare}/>
                        </Link>
                    </div>
                    <div>&copy; {trenutnaGodina}<Link to='/o-nama'><img alt='BodaVet logo' src={LogoMob} /> </Link>  Sva prava zadržana.<br /> Web and Graphic Design: <a target='_blank' rel="noopener noreferrer" href="https://fb.com/dziggy"><img className='dizajn' alt='Igor logo' src={IR} /></a></div>
                
                </div>
    </footer>
)

export default Futer;