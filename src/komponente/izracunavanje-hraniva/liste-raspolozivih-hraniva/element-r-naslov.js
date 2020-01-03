import React, {Component} from 'react';

class ElementRasNaslov extends Component {
    render() {
        return (
            <div className="hranivo">
                                <div className="kolicinanaz info">Kol.</div>
                                <div className="naziv info"> Naziv </div>
                                <div className="tooltip info">i
                                <span className="tooltip-tekst">Kategorija</span>
                                </div>
                                <button className="blanko">x</button>           
            </div>

        )
    }
}
export default ElementRasNaslov;