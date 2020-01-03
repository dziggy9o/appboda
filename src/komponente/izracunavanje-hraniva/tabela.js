import React, {Component} from 'react';

export default class IzracunataTabela extends Component {
    render() {
        return (
            <div className="tabelaIzracunatihpotreba">
            <table>
            <tbody>
            <tr>
                <th className="text-levo bez"><b>Ukupne potrebe</b></th>
                <th className="tamnije"><b>SM <br/>kg</b></th>
                <th className="tamnije"><b>NE<sub>L</sub> <br/>MJ/dan</b></th>
                <th className="tamnije"><b>SP<br/>g/dan</b></th>
                <th className="tamnije"><b>SSP<br/>g/dan</b></th>
                <th className="tamnije"><b>Ca<br/>g/dan</b></th>
                <th className="tamnije"><b>P<br/>g/dan</b></th>
            </tr>
            <tr>
                <td className="text-levo tamnije"><b>Uzdržane potrebe</b></td>
                <td></td>
                <td>{this.props.uznetoenergija}</td>
                <td>{this.props.siroviproteini}</td>
                <td>{this.props.uzsvarljiviproteini}</td>
                <td>{this.props.uzkalcijum}</td>
                <td>{this.props.uzfosfor}</td>
            </tr>
            <tr>
                <td className="text-levo tamnije"><b>Potrebe za proizvodnju mleka</b></td>
                <td></td>
                <td>{this.props.ppmnetoenergija}</td>
                <td>{this.props.siroviproteinippm}</td>
                <td>{this.props.ppmsvaljiviproteini}</td>
                <td>{this.props.ppmkalcijum}</td>
                <td>{this.props.ppmfosfor}</td>
                
            </tr>
            <tr>
                <td className="text-levo tamnije"><b>Ukupno</b></td>
                <td className="tam2">{this.props.konzsuvmattabela}</td>
                <td className="tam2">{this.props.ukupnoen}</td>
                <td className="tam2">{this.props.siroviproteiniuk}</td>
                <td className="tam2">{this.props.ukupnosp}</td>
                <td className="tam2">{this.props.ukupnok}</td>
                <td className="tam2">{this.props.ukupnof}</td>
            </tr>
            
            </tbody>
            </table>
            <table className="unpot">
            <tbody>
            <tr >
                <td className="text-levo tamnije"><b>Unete potrebe</b></td>
                <td className="tam2">{this.props.kabkoncuksm}</td>
                <td className="tam2">{this.props.kabkoncuknel}</td>
                <td className="tam2">{this.props.kabkoncuksp}</td>
                <td className="tam2">{this.props.kabkoncukssp}</td>
                <td className="tam2">{this.props.kabkoncukca}</td>
                <td className="tam2">{this.props.kabkoncukp}</td>
            </tr>
            </tbody>
            </table>
            <table className="unpot">
            <tbody>
            <tr >
                <td className="text-levo tamnije"><b>Razilka</b></td>
                <td className="tam2">{this.props.razlikasm}</td>
                <td className="tam2">{this.props.razlikanel}</td>
                <td className="tam2">{this.props.razlikasp}</td>
                <td className="tam2">{this.props.razlikassp}</td>
                <td className="tam2">{this.props.razlikaca}</td>
                <td className="tam2">{this.props.razlikap}</td>
            </tr>
            
            
            </tbody>
            </table>
            <table>
                <tbody>
                <tr>
                    <td colSpan="3" className="tamnije">SM iz kabastog dela</td>
                    <td colSpan="3" className="tamnije">SM iz koncentrovanog dela</td>
                 </tr>
                <tr>
                    <td className="tamnije">Minimalno:</td>
                    <td className="tam2">{this.props.mksmkabastideo}</td>
                    <td className="tam2">{this.props.kabastauksm}</td>
                    <td className="tamnije">Maksimalno:</td>
                    <td className="tam2">{this.props.koncdeousm}</td>
                    <td className="tam2">{this.props.koncuksm}</td>
                </tr>
                </tbody>
            </table>
            </div>
        )

    }
}