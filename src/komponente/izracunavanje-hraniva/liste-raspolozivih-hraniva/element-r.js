import React, {Component} from 'react';

class ElementRaspolozivih extends Component {
    render() {
        return (
            <div id={this.props.id} className="hranivo">
                <div className="kolicina">
                    <input type="number" value={this.props.kolicina} onChange={this.props.onChange}/>
                </div>
                <div className="naziv"> {this.props.nazhraniva} </div>
                <div className="tooltip">?
                    <span className="tooltip-tekst">{this.props.Kategorija}</span>
                </div>
                <button>x</button>    
            </div>

        )
    }
}
export default ElementRaspolozivih;