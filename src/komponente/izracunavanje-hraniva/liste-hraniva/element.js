import React, {Component} from 'react';

class Element extends Component {
    render() {
        return(
            <div
                id={this.props.id} 
                className="hranivo"
            >
            <div className="naziv">{this.props.nazhraniva}</div>
            <div className="tooltip">?
            <span className="tooltip-tekst">{this.props.Kategorija}</span>
            </div>
            <button onClick={this.props.onClick}>+</button>
            </div> 
        )
    }
}
export default Element;