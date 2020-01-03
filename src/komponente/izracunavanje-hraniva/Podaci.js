import React, {Component} from 'react';

class Podaci extends Component {

    render() {
        return(
            <div>
                <h3>{this.props.naslov}</h3>
                <input
                    type="number"
                    step=".01"
                    value={this.props.value}
                    onChange={(e) => this.props.onChange(e)}
                />
            </div>
        )
    };
}

export default Podaci;