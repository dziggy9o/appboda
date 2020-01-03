import React, {Component} from 'react';


export default class ElementiRaspolozivih extends Component {

    
    render() { 
        return (
            <div className="raspolozivahraniva">
            <h1>Raspoloživa hraniva</h1>
            <div className="izbhraniva">
                {this.props.children}
            </div>
            </div>
        )
    }
}
