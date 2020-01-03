import React, {Component} from 'react';


import Lista from './liste-hraniva/lista';
import ListaRaspolozivih from './liste-raspolozivih-hraniva/lista-raspolozivih';


class Hraniva extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rKabasta: []

        };
        
    }
    
    render() {
        return(
            <div className="hraniva">          
                <div className="listahraniva">
                    <h1>Lista hraniva</h1>
                    <Lista  />
                </div>
                <div className="raspolozivahraniva">
                    <h1>Raspoloživa hraniva</h1>
                    <ListaRaspolozivih rKabasta={this.state.rKabasta}/>
                </div>
            </div>

        )
    }

}

export default Hraniva;