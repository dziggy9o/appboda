import React, {Component} from 'react';

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
                     
                <div className="listahraniva">
                    <h1>Lista hraniva</h1>
                    
                    {this.props.children}
                    
                </div>

        )
    }
}

export default Lista;