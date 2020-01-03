import React, {Component} from 'react';

class PretragaHraniva extends Component {
    render() {
        return(
            <div className="cntr">
                    <div className="cntr-innr">
                        <label className="search">
                            <input id="inpt_search" type="text" value={this.props.value} onChange={this.props.onChange} placeholder="Pretraži..."/>
                        </label>
                    </div>
            </div>
        )
    }
}
export default PretragaHraniva;