import React, { Component } from 'react';
//Dodatne komponente
import UnosPodataka, { polje } from './izracunavanje-hraniva/UnosPodataka';
import Podaci from './izracunavanje-hraniva/Podaci';
import Lista from './izracunavanje-hraniva/liste-hraniva/lista';
import Tabs from './izracunavanje-hraniva/tabovi/tabs';
//Namenske komponente
import Elementi from './izracunavanje-hraniva/liste-hraniva/elementi';
import Element from './izracunavanje-hraniva/liste-hraniva/element';
import ElementiRaspolozivih from './izracunavanje-hraniva/liste-raspolozivih-hraniva/elementi-r';
import ElementRaspolozivih from './izracunavanje-hraniva/liste-raspolozivih-hraniva/element-r';
import ElementRasNaslov  from './izracunavanje-hraniva/liste-raspolozivih-hraniva/element-r-naslov';
//Tabela izracunatog
import IzracunataTabela from './izracunavanje-hraniva/tabela';
//Formule
import { metabolickaMasa, oduzimanje, fcM, ksM, neL, ssP, Ca, fosforMin, neLPPM, ssPPPM, CaPPM, fosforMinPPM, sP, sPj, ppmSP, sabiranje, MaxKonzSM, MaxKonzSMkoncdeo, korigovanjeSM, povecanjeNELst, povecanjeSSPst, povecanjeCa, povecanjeP, suvamaterijaHranivo, deljenje, mnozSM, sabiranjetri, MinKonzSMkabdeo } from './izracunavanje-hraniva/formule';
//Hraniva
import { kabasta, koncentrovana, mineralna } from './izracunavanje-hraniva/liste-hraniva/hraniva';
//PDF
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDokument from './pdfdokument';

//Pretraga
import PretragaHraniva from './izracunavanje-hraniva/liste-hraniva/pretraga';
//Autorizacija
import {withAuthorization} from './auth/sesija';



class IzracunavanjeHraniva extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Osnovni unos
            telesnaMasa: '',
            daniLaktacije: '',
            laktacija: '',
            prinosMleka: '',
            mlecnaMast: '',
            steonost: '',
            dnevniPrirast: '',
            //Liste
            hKabasta: kabasta,
            hKoncentrovana: koncentrovana,
            hMineralna: mineralna,
            pKabasta: '',
            pKoncentrovana: '',
            pMineralna: '',
            rKabasta: [],
            rKoncentrovana: [],
            rMineralna: [],
            //Uzdrzane potrebe - Osnovne vrednosti
            uznetoenergija: '',
            siroviproteini: '',
            uzsvarljiviproteini: '',
            uzkalcijum: '',
            uzfosfor: '',
            //Potrebe za proizvodnju mleka - Osnovne vrednosti
            ppmnetoenergija: '',
            siroviproteinippm: '',
            ppmsvaljiviproteini: '',
            ppmkalcijum: '',
            ppmfosfor: '', 
            //Ukupno - osnovne vrednosti
            ukupnoen: '',
            siroviproteiniuk: '',
            ukupnosp: '',
            ukupnok: '',
            ukupnof: '',
            konzsuvmattabela: 0.00,
        };
    
        //Promena kolicine
        this.promenaKolKabasto = this.promenaKolKabasto.bind(this);
        this.promenaKolKoncentrovano = this.promenaKolKoncentrovano.bind(this);
        this.promenaKolMineralno = this.promenaKolMineralno.bind(this);
    }
    //Izracunavanje potreba
    unetoIzracunavanje = (event) => {
        event.preventDefault();
        const fcm = Number((fcM(this.state.prinosMleka, this.state.mlecnaMast)) || 0);
        const mm = Number((metabolickaMasa(this.state.telesnaMasa)) || 0 );
        const ksm = Number((ksM(this.state.telesnaMasa, this.state.prinosMleka))  || 0);
        const uzne = Number((neL(this.state.laktacija, mm)));
        const sirprot = (sPj(this.state.telesnaMasa, this.state.laktacija) || 0);
        const uzsp = Number((ssP(this.state.laktacija, mm) || 0) );
        const uzk = Number((Ca(this.state.laktacija, this.state.telesnaMasa)) || 0);
        const uzf = Number((fosforMin(this.state.laktacija, this.state.telesnaMasa)) || 0);
        const ppmne = Number((neLPPM(fcm, this.state.steonost)) || 0);
        const ppmsp = Number((ssPPPM(fcm, this.state.steonost)) || 0);
        const ppmk = Number((CaPPM(fcm, this.state.steonost)) || 0);
        const ppmf = Number((fosforMinPPM(fcm, this.state.steonost)) || 0);
        const ukne = Number((povecanjeNELst(uzne, ppmne, this.state.steonost, this.state.dnevniPrirast).toFixed(2)) || 0);
        const uksp = (povecanjeSSPst(uzsp, ppmsp, this.state.steonost, this.state.dnevniPrirast).toFixed(2) || 0);
        const ukk = (povecanjeCa(uzk, ppmk, this.state.steonost, this.state.dnevniPrirast).toFixed(2) || 0);
        const ukf = (povecanjeP(uzf, ppmf, this.state.steonost, this.state.dnevniPrirast).toFixed(2) || 0);
        const sirprotuk = (sP(this.state.telesnaMasa, fcm).toFixed(2) || 0);
        const sirprotppm = (ppmSP(fcm, this.state.steonost) || 0);
        const makskonzsm = (MaxKonzSM(this.state.daniLaktacije, ksm));
        const korigovanjesmlaktacija = (korigovanjeSM(this.state.daniLaktacije, ksm).toFixed(2) || 0);
        const koncenpokgsm = (deljenje(ukne, korigovanjesmlaktacija).toFixed(2) || 0);
        const mksmkab = (MinKonzSMkabdeo(this.state.daniLaktacije, this.state.telesnaMasa, this.state.steonost) || 0);
        
        this.setState({
            mlekokorigovano: 'Mleko korigovano na 4%: ' + fcm,
            metabolickamasa: 'Metabolicka masa: ' + mm,
            konzsuvmaterije: 'Konzumiranje suve materije: ' + ksm,
            konzsuvmaterijekor: 'Konzumiranje suve materije (laktacija): ' + korigovanjesmlaktacija,
            //uzdrzane potrebe
            uznetoenergija: uzne,
            siroviproteini: sirprot,
            uzsvarljiviproteini: uzsp,
            uzkalcijum: uzk,
            uzfosfor: uzf,
            //Potrebe za proizvodnju mleka
            ppmnetoenergija: ppmne,
            siroviproteinippm: sirprotppm,
            ppmsvaljiviproteini: ppmsp,
            ppmkalcijum: ppmk,
            ppmfosfor: ppmf, 
            //Ukupno
            ukupnoen: ukne,
            siroviproteiniuk: sirprotuk,
            ukupnosp: uksp,
            ukupnok: ukk,
            ukupnof: ukf,
            makskonzsmizkonchraniva: 'Maksimalni obim SM iz koncentrovane hrane: ' + makskonzsm,
            koncentracijapokgsm: 'Koncentracija energije po kg SM: ' + koncenpokgsm,
            konzsuvmattabela: korigovanjesmlaktacija,
            mksmkabastideo: mksmkab
        })  
    }
    //Prebacivanje iz liste u listu
    dodajIzbaciKabasta = (id, e) => {       
        e.preventDefault();
        var uhKabasta = this.state.hKabasta.find((x) => {return x.id === id});
        if (uhKabasta != null) {
          
          let novahKabasta = this.state.hKabasta.filter((x) => {return x.id !== id});
          let novarKabasta = this.state.rKabasta;
          novarKabasta.push(uhKabasta);      
        this.setState({hKabasta:novahKabasta.sort((x,y) => { return x.id > y.id }), rKabasta:novarKabasta.sort((x,y) => { return x.id > y.id })})
        }
        else {
          let urKabasta = this.state.rKabasta.find((x) => {return x.id === id});
          let novarKabasta = this.state.rKabasta.filter((x) => {return x.id !== id});
          let novahKabasta = this.state.hKabasta;
          novahKabasta.push(urKabasta);
          this.setState({hKabasta:novahKabasta.sort((x,y) => { return x.id > y.id }), rKabasta:novarKabasta.sort((x,y) => { return x.id > y.id })})
        }    
      }
    dodajIzbaciKoncentrovana = (id, e) => {       
        e.preventDefault();
        var uhKoncentrovana = this.state.hKoncentrovana.find((x) => {return x.id === id});
        if (uhKoncentrovana != null) {
          
          let novahKoncentrovana = this.state.hKoncentrovana.filter((x) => {return x.id !== id});
          let novarKoncentrovana = this.state.rKoncentrovana;
          novarKoncentrovana.push(uhKoncentrovana);      
        this.setState({hKoncentrovana:novahKoncentrovana.sort((x,y) => { return x.id > y.id }), rKoncentrovana:novarKoncentrovana.sort((x,y) => { return x.id > y.id })})
        }
        else {
          let urKoncentrovana = this.state.rKoncentrovana.find((x) => {return x.id === id});
          let novarKoncentrovana = this.state.rKoncentrovana.filter((x) => {return x.id !== id});
          let novahKoncentrovana = this.state.hKoncentrovana;
          novahKoncentrovana.push(urKoncentrovana);
          this.setState({hKoncentrovana:novahKoncentrovana.sort((x,y) => { return x.id > y.id }), rKoncentrovana:novarKoncentrovana.sort((x,y) => { return x.id > y.id })})
        }    
    }
    dodajIzbaciMineralna = (id, e) => {       
        e.preventDefault();
        var uhMineralna = this.state.hMineralna.find((x) => {return x.id === id});
        if (uhMineralna != null) {
          
          let novahMineralna = this.state.hMineralna.filter((x) => {return x.id !== id});
          let novarMineralna = this.state.rMineralna;
          novarMineralna.push(uhMineralna);      
        this.setState({hMineralna:novahMineralna.sort((x,y) => { return x.id > y.id }), rMineralna:novarMineralna.sort((x,y) => { return x.id > y.id })})
        }
        else {
          let urMineralna = this.state.rMineralna.find((x) => {return x.id === id});
          let novarMineralna = this.state.rMineralna.filter((x) => {return x.id !== id});
          let novahMineralna = this.state.hMineralna;
          novahMineralna.push(urMineralna);
          this.setState({hMineralna:novahMineralna.sort((x,y) => { return x.id > y.id }), rMineralna:novarMineralna.sort((x,y) => { return x.id > y.id })})
        }    
    }
    //Promena kolicine
    promenaKolKabasto = (index, val) => {
        this.setState({
            rKabasta: this.state.rKabasta.map( i => (
            i === index ? {...i, kolicina: val} : i
          ))
        })
    };
    promenaKolKoncentrovano = (index, val) => {
        this.setState({
            rKoncentrovana: this.state.rKoncentrovana.map( i => (
            i === index ? {...i, kolicina: val} : i
          ))
        })
    };
    promenaKolMineralno = (index, val) => {
        this.setState({
            rMineralna: this.state.rMineralna.map( i => (
            i === index ? {...i, kolicina: val} : i
          ))
        })
    };
    render() {
        //Ukupna kolicina izabranih hraniva
        //Uk sm
        const kabastauksm = this.state.rKabasta.reduce((hran, vrednost) => {return hran + Number(suvamaterijaHranivo(vrednost.kolicina,vrednost.sm));}, 0);
        const koncuksm = this.state.rKoncentrovana.reduce((hran, vrednost) => {return hran + Number(suvamaterijaHranivo(vrednost.kolicina,vrednost.sm));}, 0);
        const mineuksm = this.state.rMineralna.reduce((hran, vrednost) => {return hran + Number(suvamaterijaHranivo(vrednost.kolicina,vrednost.sm));}, 0);
        const kabkoncuksm = sabiranjetri(Number(kabastauksm), Number(koncuksm),  Number(mineuksm)).toFixed(2) || 0 ;
        //Uk nel
        const kabastauknel = this.state.rKabasta.reduce((hran, vrednost) => {return hran + Number(mnozSM(vrednost.kolicina,vrednost.sm,vrednost.nelmj));}, 0);
        const koncuknel = this.state.rKoncentrovana.reduce((hran, vrednost) => {return hran + Number(mnozSM(vrednost.kolicina,vrednost.sm,vrednost.nelmj));}, 0);
        const kabkoncuknel = sabiranje(Number(kabastauknel), Number(koncuknel)).toFixed(2) || 0 ;
        //Uk sp
        const kabastauksp = this.state.rKabasta.reduce((hran, vrednost) => {return hran + Number(mnozSM(vrednost.kolicina,vrednost.sm,vrednost.sp));}, 0);
        const koncuksp = this.state.rKoncentrovana.reduce((hran, vrednost) => {return hran + Number(mnozSM(vrednost.kolicina,vrednost.sm,vrednost.sp));}, 0);
        const mineuksp = this.state.rMineralna.reduce((hran, vrednost) => {return hran + Number(mnozSM(vrednost.kolicina,vrednost.sm,vrednost.sp));}, 0);
        const kabkoncuksp = sabiranjetri(Number(kabastauksp), Number(koncuksp), Number(mineuksp)).toFixed(2) || 0 ;
        //Uk ssp
        const kabastaukssp = this.state.rKabasta.reduce((hran, vrednost) => {return hran + Number(mnozSM(vrednost.kolicina,vrednost.sm,vrednost.ssp));}, 0);
        const koncukssp = this.state.rKoncentrovana.reduce((hran, vrednost) => {return hran + Number(mnozSM(vrednost.kolicina,vrednost.sm,vrednost.ssp));}, 0);
        const kabkoncukssp = sabiranje(Number(kabastaukssp), Number(koncukssp)).toFixed(2) || 0 ;
        //Uk ca
        const kabastaukca = this.state.rKabasta.reduce((hran, vrednost) => {return hran + Number(mnozSM(vrednost.kolicina,vrednost.sm,vrednost.ca));}, 0);
        const koncukca = this.state.rKoncentrovana.reduce((hran, vrednost) => {return hran + Number(mnozSM(vrednost.kolicina,vrednost.sm,vrednost.ca));}, 0);
        const mineukca = this.state.rMineralna.reduce((hran, vrednost) => {return hran + Number(mnozSM(vrednost.kolicina,vrednost.sm,vrednost.ca));}, 0);
        const kabkoncukca = sabiranjetri(Number(kabastaukca), Number(koncukca), Number(mineukca)).toFixed(2) || 0 ;
        //Uk p
        const kabastaukp = this.state.rKabasta.reduce((hran, vrednost) => {return hran + Number(mnozSM(vrednost.kolicina,vrednost.sm,vrednost.p));}, 0);
        const koncukp = this.state.rKoncentrovana.reduce((hran, vrednost) => {return hran + Number(mnozSM(vrednost.kolicina,vrednost.sm,vrednost.p));}, 0);
        const mineukp = this.state.rMineralna.reduce((hran, vrednost) => {return hran + Number(mnozSM(vrednost.kolicina,vrednost.sm,vrednost.p));}, 0);
        const kabkoncukp = sabiranjetri(Number(kabastaukp), Number(koncukp), Number(mineukp)).toFixed(2) || 0 ;
        //Razlika u kolicini
        const razlikasm = oduzimanje(Number(this.state.konzsuvmattabela), Number(kabkoncuksm)) || 0;
        const razlikanel = oduzimanje(Number(this.state.ukupnoen), Number(kabkoncuknel)) || 0;
        const razlikasp = oduzimanje(Number(this.state.siroviproteiniuk), Number(kabkoncuksp)) || 0;
        const razlikassp = oduzimanje(Number(this.state.ukupnosp), Number(kabkoncukssp)) || 0;
        const razlikaca = oduzimanje(Number(this.state.ukupnok), Number(kabkoncukca)) || 0;
        const razlikap = oduzimanje(Number(this.state.ukupnof), Number(kabkoncukp)) || 0;
        //Koncentrovani deo u sm
        const koncdeousm = MaxKonzSMkoncdeo(Number(this.state.daniLaktacije), Number(this.state.konzsuvmattabela), Number(this.state.steonost)) || 0 ;
        //Pretraga
        let filtriranoKabasto = this.state.pKabasta.length > 0 ? this.state.hKabasta.filter(x => (x.nazhraniva.toLowerCase().match(this.state.pKabasta.toLowerCase()))) : this.state.hKabasta;
        let filtriranoKoncentrovano = this.state.pKoncentrovana.length > 0 ? this.state.hKoncentrovana.filter(x => (x.nazhraniva.toLowerCase().match(this.state.pKoncentrovana.toLowerCase()))) : this.state.hKoncentrovana;
        let filtriranoMineralno = this.state.pMineralna.length > 0 ? this.state.hMineralna.filter(x => (x.nazhraniva.toLowerCase().match(this.state.pMineralna.toLowerCase()))) : this.state.hMineralna;
        //Izabrana hraniva
        let rKabasta = this.state.rKabasta;
        let rKoncentrovana = this.state.rKoncentrovana;
        let rMineralna = this.state.rMineralna;
        //Mapiranje
        const kathraniva = [
            {ime: 'Kabasta', kategorija: filtriranoKabasto, pretraga: 'pKabasta', funkc: 'dodajIzbaciKabasta'},
            {ime: 'Koncentrovana', kategorija: filtriranoKoncentrovano, pretraga: 'pKoncentrovana', funkc: 'dodajIzbaciKoncentrovana'},
            {ime: 'Mineralna', kategorija: filtriranoMineralno, pretraga: 'pMineralna', funkc: 'dodajIzbaciMineralna'}
        ];
        const rHraniva = [
            {kategorija: 'Kabasta hraniva', rhraniva: rKabasta, izmena: 'promenaKolKabasto', funkc: 'dodajIzbaciKabasta'},
            {kategorija: 'Koncentrovana hraniva', rhraniva: rKoncentrovana, izmena: 'promenaKolKoncentrovano', funkc: 'dodajIzbaciKoncentrovana'},
            {kategorija: 'Mineralna hraniva', rhraniva: rMineralna, izmena: 'promenaKolMineralno', funkc: 'dodajIzbaciMineralna'}
        ];
        return (
            <div>
                <UnosPodataka izracunavanje={this.unetoIzracunavanje}>
                {polje.map((podatak, i) => {
                        return <Podaci
                        {...podatak}
                        value={this.state[podatak.vrednost]}
                        onChange={e => this.setState({
                            [podatak.vrednost]: e.target.value
                        })}
                        key={i}
                        
                        />
                    }
                        )}    
                </UnosPodataka> 
                <IzracunataTabela 

                uznetoenergija={this.state.uznetoenergija}
                siroviproteini={this.state.siroviproteini}
                uzsvarljiviproteini={this.state.uzsvarljiviproteini}
                uzkalcijum={this.state.uzkalcijum}
                uzfosfor={this.state.uzfosfor}

                ppmnetoenergija={this.state.ppmnetoenergija}
                siroviproteinippm={this.state.siroviproteinippm}
                ppmsvaljiviproteini={this.state.ppmsvaljiviproteini}
                ppmkalcijum={this.state.ppmkalcijum}
                ppmfosfor={this.state.ppmfosfor}

                konzsuvmattabela={this.state.konzsuvmattabela}
                ukupnoen={this.state.ukupnoen}
                siroviproteiniuk={this.state.siroviproteiniuk}
                ukupnosp={this.state.ukupnosp}
                ukupnok={this.state.ukupnok}
                ukupnof={this.state.ukupnof}

                kabkoncuksm={kabkoncuksm}
                kabkoncuknel={kabkoncuknel}
                kabkoncuksp={kabkoncuksp}
                kabkoncukssp={kabkoncukssp}
                kabkoncukca={kabkoncukca}
                kabkoncukp={kabkoncukp}
                
                razlikasm={razlikasm}
                razlikanel={razlikanel}
                razlikasp={razlikasp}
                razlikassp={razlikassp}
                razlikaca={razlikaca}
                razlikap={razlikap}

                mksmkabastideo={this.state.mksmkabastideo}
                kabastauksm={kabastauksm}
                
                koncdeousm={koncdeousm}
                koncuksm={koncuksm}
                />
                <div className="hraniva"> 
                <Lista>
                <Tabs>
                {kathraniva.map((kat, indexKat) => {
                    return (
                    <div label={kat.ime} key={indexKat}>
                    <PretragaHraniva  value={this.state[kat.pretraga]} onChange={e => this.setState({[kat.pretraga]: e.target.value})}/>
                    <Elementi 
                    filtrirano={kat.kategorija.map((x, i) => {
                        return <Element key={i} {...x} onClick={(e) => this[kat.funkc](x.id,e)}/>
                    })}
                    />
                    </div>
                    )
                })}
                </Tabs>
                </Lista>
                <ElementiRaspolozivih>
                {rHraniva.map((kat, katIndex) => {
                    return (
                        <div key={katIndex}>
                            <h2>{kat.kategorija}</h2>
                            <ElementRasNaslov/>
                            {kat.rhraniva.map((x,i) => {
                                return <ElementRaspolozivih key={i} {...x} 
                                onChange={(e) => this[x.izmenaKol](x, e.target.value || 0)}
                                onClick={(e) => this[kat.funkc](x.id, e)} />
                            })}
                        </div>
                    )
                })}
                </ElementiRaspolozivih>
                </div>
                <div className='bodaPdf'>
                <PDFDownloadLink
                    document={<PdfDokument
                        telesnaMasa={this.state.telesnaMasa}
                        daniLaktacije={this.state.daniLaktacije}
                        laktacija={this.state.laktacija}
                        prinosMleka={this.state.prinosMleka}
                        mlecnaMast={this.state.mlecnaMast}
                        steonost={this.state.steonost}
                        dnevniPrirast={this.state.dnevniPrirast}

                        sm={''}
                        uznetoenergija={this.state.uznetoenergija}
                        siroviproteini={this.state.siroviproteini}
                        uzsvarljiviproteini={this.state.uzsvarljiviproteini}
                        uzkalcijum={this.state.uzkalcijum}
                        uzfosfor={this.state.uzfosfor}

                        ppmnetoenergija={this.state.ppmnetoenergija}
                        siroviproteinippm={this.state.siroviproteinippm}
                        ppmsvaljiviproteini={this.state.ppmsvaljiviproteini}
                        ppmkalcijum={this.state.ppmkalcijum}
                        ppmfosfor={this.state.ppmfosfor}

                        konzsuvmattabela={this.state.konzsuvmattabela}
                        ukupnoen={this.state.ukupnoen}
                        siroviproteiniuk={this.state.siroviproteiniuk}
                        ukupnosp={this.state.ukupnosp}
                        ukupnok={this.state.ukupnok}
                        ukupnof={this.state.ukupnof}
                        
                        kabkoncuksm={kabkoncuksm}
                        kabkoncuknel={kabkoncuknel}
                        kabkoncuksp={kabkoncuksp}
                        kabkoncukssp={kabkoncukssp}
                        kabkoncukca={kabkoncukca}
                        kabkoncukp={kabkoncukp}
                        
                        razlikasm={razlikasm}
                        razlikanel={razlikanel}
                        razlikasp={razlikasp}
                        razlikassp={razlikassp}
                        razlikaca={razlikaca}
                        razlikap={razlikap}

                        mksmkabastideo={this.state.mksmkabastideo}
                        kabastauksm={kabastauksm}
                        
                        koncdeousm={koncdeousm}
                        koncuksm={koncuksm}

                        rKabasta={this.state.rKabasta}
                        rKoncentrovana={this.state.rKoncentrovana}
                        rMineralna={this.state.rMineralna}


                       />}
                    fileName="bodavet-faktura.pdf"
                    
                >
                    {({ blob, url, loading, error }) =>
                        loading ? "Učitavanje dokumenta..." : "Skini PDF"
                    }
                 </PDFDownloadLink>
                 </div>
            </div>
        )
    }
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(IzracunavanjeHraniva);