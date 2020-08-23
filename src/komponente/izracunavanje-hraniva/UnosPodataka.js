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
               
                <div className="boda-form">
                <h2>Unos podataka</h2>
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

export const UnosPodatakaEmailZahtev = (props) => (
            <div>
               
                <div className="boda-form">
                <h2>2. Unos podataka</h2>
                    <form onSubmit={props.izracunavanje}>
                    {props.children} 
                    </form>
                </div>
            </div>
            )


export default UnosPodataka;