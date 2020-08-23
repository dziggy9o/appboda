import React, {Component} from 'react';
import * as emailjs from 'emailjs-com';
import {polje, UnosPodatakaEmailZahtev} from '../izracunavanje-hraniva/UnosPodataka';
import Podaci from '../izracunavanje-hraniva/Podaci';
import Lista from '../izracunavanje-hraniva/liste-hraniva/lista';
import Tabs from '../izracunavanje-hraniva/tabovi/tabs';
//Namenske komponente
import Elementi from '../izracunavanje-hraniva/liste-hraniva/elementi';
import Element from '../izracunavanje-hraniva/liste-hraniva/element';
import ElementiRaspolozivih from '../izracunavanje-hraniva/liste-raspolozivih-hraniva/elementi-r';
import ElementRaspolozivih from '../izracunavanje-hraniva/liste-raspolozivih-hraniva/element-r';
import ElementRasNaslov  from '../izracunavanje-hraniva/liste-raspolozivih-hraniva/element-r-naslov';
//Hraniva
import { kabasta, koncentrovana, mineralna } from '../izracunavanje-hraniva/liste-hraniva/hraniva';
//Pretraga
import PretragaHraniva from '../izracunavanje-hraniva/liste-hraniva/pretraga';



class AnalizaKrava extends Component {
    constructor(props){
        super(props);
        this.state = {
            //Osnovni podaci korisnika
            ime: '',
            email: '',
            tel: '',
            frima: '',
            pib: '',
            pzbr: '',
            greska: {
				tel: '',
				ime: '',
				email: ''
            },
            cena: '1000',
            valdino: false,
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
        };
         //Promena kolicine
         this.promenaKolKabasto = this.promenaKolKabasto.bind(this);
         this.promenaKolKoncentrovano = this.promenaKolKoncentrovano.bind(this);
         this.promenaKolMineralno = this.promenaKolMineralno.bind(this);
         this.dodajIzbaciKabasta = this.dodajIzbaciKabasta.bind(this);
         this.posaljiEmail = this.posaljiEmail.bind(this);
    }
     //Prebacivanje iz liste u listu
     dodajIzbaciKabasta = (id, e) => {       
        e.preventDefault();
        const uhKabasta = this.state.hKabasta.find((x) => {return x.id === id});
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
        if (uhMineralna !=  null) {
          
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
    proveriValidnost = () => {
		let greska = {};
		let validnostForme = true;

		if(!this.state.ime || this.state.ime.length < 7) {
			greska.ime = 'Neispravan unos!';
			validnostForme = false;
		}
		if(!this.state.tel || this.state.tel.length < 7) {
			greska.tel = 'Neispravan unos!';
			validnostForme = false;
		}
		if(!this.state.email || this.state.email.length < 3) {
			greska.email = 'Minimalno tri slova!'
			validnostForme = false;
		}
		let patern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

		if(!patern.test(this.state.email)) {
			greska.email = 'Adresa nije validna!';
			validnostForme = false;
		}
		this.setState({
			greska: greska
		})
		return validnostForme	
    } 


    
    posaljiEmail  = (e) => {
        e.preventDefault();
        if(!this.proveriValidnost()) {
			return
        }
        var pozivNaBroj = Math.floor(Math.random() * 10000000);
        var kabastaHraniva = '';
        var koncentrovanaHraniva = '';
        var mineralnaHraniva = '';
        var i = '';
        
        for (i in this.state.rKabasta) {
            kabastaHraniva += this.state.rKabasta[i].nazhraniva + ' - Količina: ' + this.state.rKabasta[i].kolicina + ' kg <br>';
        }
        for (i in this.state.rKoncentrovana) {
            koncentrovanaHraniva += this.state.rKoncentrovana[i].nazhraniva + ' - Količina: ' + this.state.rKoncentrovana[i].kolicina + ' kg <br>' ;
        }
        for (i in this.state.rMineralna) {
            mineralnaHraniva += this.state.rMineralna[i].nazhraniva + ' - Količina: ' + this.state.rMineralna[i].kolicina + ' kg <br>';
        }

        


    
		var tempParams = {
			from_name: 'Proba',
            to_name: 'Igore',
            //Osnovni podaci
            ime: this.state.ime,
            email: this.state.email,
            telefon: this.state.tel,
            firma: this.state.firma,
            pib: this.state.pib,
            pzbr: pozivNaBroj,
            //hraniva izabrana
            kabasta: kabastaHraniva,
            koncentrovana: koncentrovanaHraniva,
            mineralna: mineralnaHraniva,
            //osnovni unos
            telesnaMasa: this.state.telesnaMasa,
            daniLaktacije: this.state.daniLaktacije,
            laktacija: this.state.laktacija,
            prinosMleka: this.state.prinosMleka,
            mlecnaMast: this.state.mlecnaMast,
            steonost: this.state.steonost,
            dnevniPrirast: this.state.dnevniPrirast,
		}
		emailjs.send('default_service', 'bodaapp', tempParams, 'user_SPkdW4TosAmrkXqkUij5r')
			.then(function (res) {
                //alert('Uspešno ste poslali poruku. Hvala Vam na ukazanom poverenju!');
				console.log('Uspesno!', res.status, res.text);
			}, function(err) {
            
                
				console.log(err)
            })
            this.setState({
                ime: '',
                email: '',
                tel: '',
                firma: '',
                pib: '',
                telesnaMasa: '',
                daniLaktacije: '',
                laktacija: '',
                prinosMleka: '',
                mlecnaMast: '',
                steonost: '',
                dnevniPrirast: '',
                rKabasta: [],
                rKoncentrovana: [],
                rMineralna: [],
                pzbr: pozivNaBroj,
                valdino: true
            })
			
	}
    render() {
        //Pretraga
        let filtriranoKabasto = this.state.pKabasta.length > 0 ? this.state.hKabasta.filter(x => (x.nazhraniva.toLowerCase().match(this.state.pKabasta.toLowerCase()))) : this.state.hKabasta;
        let filtriranoKoncentrovano = this.state.pKoncentrovana.length > 0 ? this.state.hKoncentrovana.filter(x => (x.nazhraniva.toLowerCase().match(this.state.pKoncentrovana.toLowerCase()))) : this.state.hKoncentrovana;
        let filtriranoMineralno = this.state.pMineralna.length > 0 ? this.state.hMineralna.filter(x => (x.nazhraniva.toLowerCase().match(this.state.pMineralna.toLowerCase()))) : this.state.hMineralna;
        //Izabrana hraniva
        let arKabasta = this.state.rKabasta;
        let arKoncentrovana = this.state.rKoncentrovana;
        let arMineralna = this.state.rMineralna;
        //Mapiranje
        const kathraniva = [
            {ime: 'Kabasta', kategorija: filtriranoKabasto, pretraga: 'pKabasta', funkc: 'dodajIzbaciKabasta'},
            {ime: 'Koncentrovana', kategorija: filtriranoKoncentrovano, pretraga: 'pKoncentrovana', funkc: 'dodajIzbaciKoncentrovana'},
            {ime: 'Mineralna', kategorija: filtriranoMineralno, pretraga: 'pMineralna', funkc: 'dodajIzbaciMineralna'}
        ];
        const rHraniva = [
            {kategorija: 'Kabasta hraniva', rhraniva: arKabasta, izmena: 'promenaKolKabasto', funkc: 'dodajIzbaciKabasta'},
            {kategorija: 'Koncentrovana hraniva', rhraniva: arKoncentrovana, izmena: 'promenaKolKoncentrovano', funkc: 'dodajIzbaciKoncentrovana'},
            {kategorija: 'Mineralna hraniva', rhraniva: arMineralna, izmena: 'promenaKolMineralno', funkc: 'dodajIzbaciMineralna'}
        ];
        const osnovniPodaci = [
            {name: 'Ime i prezime', type: 'text', placeholder: 'Unesite vaše ime i prezime...', value: 'ime', greska: this.state.greska.ime },
            {name: 'Email', type: 'email', placeholder: 'Unesite email adresu...', value: 'email', greska: this.state.greska.email},
            {name: 'Telefon', type: 'text', placeholder: 'Unesite broj telefona za kontakt...', value: 'tel', greska: this.state.greska.tel },
            {name: 'Firma', type: 'text', placeholder: 'Unesite ime firme...', value: 'firma', firma: 'Ukoliko ste pravno lice, popunite podatke ispod:'},
            {name: 'PIB', type: 'text', placeholder: 'Unesite PIB firme...', value: 'pib'},
        ];
        return (
            <section>
                <div className='analizaOP'>
                <h2>1. Osnovni podaci</h2>
                    {osnovniPodaci.map((x, i) => {
                        return (<div>
                        <h4>{x.firma}</h4>
                        <input key={i} {...x} value={this.state[x.value]}
                         onChange={e => this.setState({[x.value]: e.target.value})}
                        />
                        <h5>{x.greska}</h5>
                        </div>)
                    })}
                </div>
                <UnosPodatakaEmailZahtev >
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
                </UnosPodatakaEmailZahtev>
                <div className='hraniva'>
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
                <div className="dugme" style={{margin: '20px', textAlign: 'center'}}>
                        <input type="submit" onClick={this.posaljiEmail} value="Pošalji zahtev" />
                </div>
                {this.state.valdino ?
                <div className='uspesnaPoruka'>
                Uspešno ste poslali poruku. <br/>
                Uplatom od: {this.state.cena} RSD na tekući račun: 265-6140310000575-90 sa pozivom na broj: {this.state.pzbr} <br/>
                poslaćemo Vam kompletnu analizu na Vašu email adresu.<br />
                Hvala Vam na ukazanom poverenju!
            </div> : null }    
                
            </section>
        )
    }
}
export default AnalizaKrava;