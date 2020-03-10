import React, { Component } from 'react';
import {
    Page,
    Text,
    View,
    Document,
    Image
  } from "@react-pdf/renderer";

import {izgled} from './pdfizgled'

export const infofirma = [
    {tekst: 'Agencija BODAVET'},
    {tekst: 'Prkosava bb, Prkosava'},
    {tekst: 'tel.: 063 883 77 90'},
    {tekst: 'PIB: 109339027'},
    {tekst: 'm.b.: 64104446'},
    {tekst: 't.r.: 265-6140310000575-90'},
]

export const unosPodatakaPdf = [
    {naslov: 'Telesna masa', data: "telesnaMasa"},
    {naslov: 'Dani laktacije', data: "daniLaktacije"},
    {naslov: 'Laktacija', data: "laktacija"},
    {naslov: 'Prinos mleka', data: "prinosMleka"},
    {naslov: 'Mlečna mast', data: "mlecnaMast"},
    {naslov: 'Steonost', data: "steonost"},
    {naslov: 'Dnevni prirast', data: 'dnevniPrirast'},
]
export const ukupnePotrebe = [
    {text1: 'SM', text2: 'kg'},
    {text1: 'NEL', text2: 'MJ/dan'},
    {text1: 'SP', text2: 'g/dan'},
    {text1: 'SSP', text2: 'g/dan'},
    {text1: 'Ca', text2: 'g/dan'},
    {text1: 'P', text2: 'g/dan'},
]
export const uzdrzanePotrebe = [
    {data: 'sm'},
    {data: 'uznetoenergija'},
    {data: 'siroviproteini'},
    {data: 'uzsvarljiviproteini'},
    {data: 'uzkalcijum'},
    {data: 'uzfosfor'},
]
export const potrebeMleko = [
    {data: 'sm'},
    {data: 'ppmnetoenergija'},
    {data: 'siroviproteinippm'},
    {data: 'ppmsvaljiviproteini'},
    {data: 'ppmkalcijum'},
    {data: 'ppmfosfor'},
]
export const ukupno = [
    {data: 'konzsuvmattabela'},
    {data: 'ukupnoen'},
    {data: 'siroviproteiniuk'},
    {data: 'ukupnosp'},
    {data: 'ukupnok'},
    {data: 'ukupnof'},
]
export const unetePotrebe = [
    {data: 'kabkoncuksm'},
    {data: 'kabkoncuknel'},
    {data: 'kabkoncuksp'},
    {data: 'kabkoncukssp'},
    {data: 'kabkoncukca'},
    {data: 'kabkoncukp'},
]
export const razlika = [
    {data: 'razlikasm'},
    {data: 'razlikanel'},
    {data: 'razlikasp'},
    {data: 'razlikassp'},
    {data: 'razlikaca'},
    {data: 'razlikap'},
]


export default class PdfDokument extends Component {
    render() {
        return (
                <Document>
                     <Page size='A4' style={izgled.stranica}>
                         <View>
                             <View style={izgled.heder}>
                                <Image src='/images/logo.png' style={izgled.logoslika}/>
                                <View>
                                    {infofirma.map(x => {
                                        return <Text style={izgled.infofirma}>
                                                    {x.tekst}
                                                </Text>
                                    })}
                                </View>
                             </View>
                             <Text style={izgled.naslov}>UNETI PODACI</Text>
                             <View style={izgled.heder}>
                                 {unosPodatakaPdf.map((x, i) => {
                                     return (
                                        
                                        <View key={i} style={izgled.polje}>
                                            <Text style={izgled.polje.unos}>
                                                {this.props[x.data]}
                                            </Text>
                                            <Text style={izgled.polje.naslov}>
                                                {x.naslov}
                                            </Text>
                                        </View>
                                            )})}
                             </View>
                             <Text style={izgled.naslov}>POTREBE ZIVOTINJE</Text>
                             <View style={izgled.tabela.glNaslov}>
                                <Text style={izgled.tabela.glNaziv}>
                                    Ukpune potrebe
                                </Text>
                                {ukupnePotrebe.map(x => {
                                    return (
                                        <View style={izgled.tabela.glOstalo}>
                                            <Text>
                                                {x.text1}
                                            </Text>
                                            <Text>
                                                {x.text2}
                                            </Text>
                                        </View>
                                        
                                    )
                                })}
                             </View>
                             <View style={izgled.tabela.poljeRed}>
                                 <Text style={izgled.tabela.poljeNaziv}>
                                    Uzdrzane potrebe
                                 </Text>
                                 {uzdrzanePotrebe.map(x => {
                                     return <Text style={izgled.tabela.poljeOstalo}>{this.props[x.data]}</Text>
                                 })}
                             </View>
                             <View style={izgled.tabela.poljeRed}>
                                 <Text style={izgled.tabela.poljeNaziv}>
                                    Potrebe za proizvodnju mleka
                                 </Text>
                                 {potrebeMleko.map(x => {
                                     return <Text style={izgled.tabela.poljeOstalo}>{this.props[x.data]}</Text>
                                 })}
                             </View>
                             <View style={izgled.tabela.poljeRed}>
                                 <Text style={izgled.tabela.poljeNaziv}>
                                    Ukupno     
                                </Text>
                                 {ukupno.map(x => {
                                     return <Text style={izgled.tabela.poljeOstalo}>{this.props[x.data]}</Text>
                                 })}
                             </View>
                             <View style={izgled.tabela.poljeRed2}>
                                 <Text style={izgled.tabela.poljeNaziv}>
                                    Unete potrebe     
                                </Text>
                                 {unetePotrebe.map(x => {
                                     return <Text style={izgled.tabela.poljeOstalo}>{this.props[x.data]}</Text>
                                 })}
                             </View>
                             <View style={izgled.tabela.poljeRed}>
                                 <Text style={izgled.tabela.poljeNaziv}>
                                    Razlika 
                                </Text>
                                 {razlika.map(x => {
                                     return <Text style={izgled.tabela.poljeOstalo}>{this.props[x.data]}</Text>
                                 })}
                             </View>
                             <View style={izgled.tabela.poljeRed3}>
                                     <Text style={izgled.tabela.poljeOstalo2}>
                                        SM iz kabastog dela
                                     </Text>
                                     <Text style={izgled.tabela.poljeOstalo3}>
                                     SM iz koncetrovanog dela
                                     </Text>
                             </View>
                             <View style={izgled.tabela.poljeRed}>
                                     <Text style={izgled.tabela.poljeOstalo4}>
                                        Minimalno:
                                     </Text>
                                     <Text style={izgled.tabela.poljeOstalo5}>
                                     {this.props.mksmkabastideo}
                                     </Text>
                                     <Text style={izgled.tabela.poljeOstalo5}>
                                     {this.props.kabastauksm}
                                     </Text>
                                     <Text style={izgled.tabela.poljeOstalo5}>
                                         Maksimalno:
                                     </Text>
                                     <Text style={izgled.tabela.poljeOstalo5}>
                                     {this.props.koncdeousm}
                                     </Text>
                                     <Text style={izgled.tabela.poljeOstalo5}>
                                     {this.props.koncuksm}
                                     </Text>
                             </View>
                             <Text style={izgled.naslov}>UNETA RASPOLOZIVA HRANIVA</Text>
                             <View style={izgled.tabela.glNaslov}>
                                <Text style={izgled.tabela.glNaziv}>
                                    HRANIVA
                                </Text>
                                {ukupnePotrebe.map(x => {
                                    return (
                                        <View style={izgled.tabela.glOstalo}>
                                            <Text>
                                                {x.text1}
                                            </Text>
                                            <Text>
                                                {x.text2}
                                            </Text>
                                        </View>
                                        
                                    )
                                })}
                             </View>
                             <Text style={izgled.nazivHraniva}>Kabasta:</Text>
                             {this.props.rKabasta.map(x => {
                                 return (
                                    <View style={izgled.tabela.poljeRed}>
                                        <Text style={izgled.tabela.poljeKolicina}>{x.kolicina} kg</Text>
                                        <Text style={izgled.tabela.poljeNaziv2}>
                                            {x.nazhraniva}
                                        </Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.sm}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.nelmj}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.sp}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.ssp}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.ca}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.p}</Text>
                                    </View>
                                 )
                             } )}
                             <Text style={izgled.nazivHraniva}>Koncentrovana:</Text>
                             {this.props.rKoncentrovana.map(x => {
                                 return (
                                    <View style={izgled.tabela.poljeRed}>
                                        <Text style={izgled.tabela.poljeKolicina}>{x.kolicina} kg</Text>
                                        <Text style={izgled.tabela.poljeNaziv2}>
                                            {x.nazhraniva}
                                        </Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.sm}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.nelmj}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.sp}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.ssp}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.ca}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.p}</Text>
                                    </View>
                                 )
                             } )}
                             <Text style={izgled.nazivHraniva}>Mineralna:</Text>
                             {this.props.rMineralna.map(x => {
                                 return (
                                    <View style={izgled.tabela.poljeRed}>
                                        <Text style={izgled.tabela.poljeKolicina}>{x.kolicina} kg</Text>
                                        <Text style={izgled.tabela.poljeNaziv2}>
                                            {x.nazhraniva}
                                        </Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.sm}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.nelmj}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.sp}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.ssp}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.ca}</Text>
                                        <Text style={izgled.tabela.poljeOstalo}>{x.p}</Text>
                                    </View>
                                 )
                             } )}
                        
                         </View>
                     </Page>
                </Document>
        
            )
            
    }
}