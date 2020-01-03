import React, {Component} from 'react';


export const polje = [
    {naslov: 'Telesna masa:', vrednost: 'telesnaMasa'},
    {naslov: 'Dani Laktacije:', vrednost: 'daniLaktacije'},
    {naslov: 'Laktacija:', vrednost: 'laktacija'},
    {naslov: 'Prinos mleka:', vrednost: 'prinosMleka'},
    {naslov: 'Mlečna mast:', vrednost: 'mlecnaMast'},
    {naslov: 'Steonost:', vrednost: 'steonost'},
    {naslov: 'Dnevni prirast:', vrednost: 'dnevniPrirast'}
]

class UnosPodataka extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
               <h2>Unos podataka</h2>
                <div className="boda-form">
                    <form onSubmit={this.props.izracunavanje}>
                    {this.props.children}
                    <div className="dugme">
                        <input type="submit" value="Izračunaj" />
                    </div>    
                    </form>
                </div>
            </div>
        )

    };

}

export default UnosPodataka;