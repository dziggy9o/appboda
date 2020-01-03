import React, {Component} from 'react';

class Elementi extends Component {
    render() {
        return(
                    <div className="lista">
                        <div className="tablica">
                            {this.props.filtrirano}
                        </div>
                    </div>
                
                
        )
    }
}
export default Elementi;

