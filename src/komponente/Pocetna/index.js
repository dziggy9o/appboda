import React from 'react';

//komponente
import Usluge from './usluge';
import TextPocetna from './tekst';

const Pocetna = () => (
    <div>
        <TextPocetna />
        <Usluge />
        
    </div>
)

export default Pocetna;

export { Usluge };