import React from 'react';
import { Link } from 'react-router-dom';

import {Krava, KravaGood, Ovca} from '../../tema/ikone';

const listaUsluga = [
    {id: 1, naslov: 'Analiza potreba i obroka krava', ikona: <img className='uslSlika' src={Krava} alt='Usluge' />, tekst: ''},
    {id: 2, naslov: 'Korekcija obroka krava', ikona: <img className='uslSlika' src={KravaGood} alt='Usluge' />, tekst: 'U saradnji sa agronomima i veterinarima korigujemo nepravilno izbalansiran obrok'},
    {id: 3, naslov: 'Analiza potreba i obroka ovaca, ovnova i jagnjadi', ikona: <img className='uslSlika' src={Ovca} alt='Usluge' />, tekst: 'Analiza potreba i datih hraniva u obrocima priplodnih ovaca,.priplodnih ovnova i jagnjadi, kao i jagnjadi u tovu'},
]

const Usluge = () => (
    <section id="usluge" className="wrapper style1 special">
                <div className="container">
                    <header className="major">
                        <h2>Usluge</h2>
                    </header>
                    <div className="box alt">
                        <div className="row gtr-uniform">
                            {listaUsluga.map(usluge => {
                                return (
                                    <section key={usluge.id} className="col-4 col-6-medium col-12-xsmall">
                                        {usluge.ikona}
                                        <h3>{usluge.naslov}</h3>
                                        <p>{usluge.tekst}</p>
                                    </section>
                                )
                            })}
                        </div>
                    </div>
                    <footer className="major">
                        <ul className="actions special">
                            <li><Link to='/usluge' className="button">Saznaj više</Link></li>
                        </ul>
                    </footer>
                </div>
            </section>
)
export default Usluge;