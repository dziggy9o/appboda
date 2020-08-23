import {StyleSheet, Font} from '@react-pdf/renderer'

Font.register('https://github.com/chenqing/ng-mini/blob/master/font/msyh.ttf', { family: 'Microsoft Yahei' });


export const izgled = StyleSheet.create({
    stranica: {
        padding: '20px',
        
    },
    heder: {
        paddingLeft: '12px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    logoslika: {
        width: '87px',
        height: '76px',
        paddingRight: '10px',
        borderStyle: 'solid',
        borderRightWidth: 2,
        borderColor: '#F48120',
        display: 'inline'
    },
    infofirma: {
        fontSize: 10,
        paddingLeft: '10px',
        marginBottom: '2px',
    },
    naslov: {
        fontSize: 15,
        marginTop: '20px',
        marginBottom: '10px',
        textAlign: 'center'
    },
    polje: {
        height: '67px',
        width: '87px',
        position: 'relative',
        marginLeft: '20px',
        marginRight: '20px',
        marginBottom: '10px',
        naslov: {
            position: 'absolute',
            top: '0px',
            left: '4px',
            width: '79px',
            height: '17px',
            borderWidth: 1,
            borderColor: 'black',
            borderStyle: 'solid',
            textAlign: 'center',
            fontSize: 10,
            borderRadius: 5,
            verticalAlign: 'middle',
            backgroundColor: 'white',
            paddingTop: '3px',
        },
        unos: {
            textAlign: 'center',
            position: 'absolute',
            bottom: '0px',
            left: '0',
            width: '87px',
            height: '61px',
            borderWidth: 1,
            borderColor: 'black',
            borderStyle: 'solid',
            verticalAlign: 'middle',
            borderRadius: 5,
            paddingTop: '22px',
        }
    },
    nazivHraniva: {
        fontSize: 12,
    },

    tabela: {
        glNaslov: {
            height: '28px',
            borderWidth: 1,
            borderColor: 'black',
            borderStyle: 'solid',
            flexDirection: 'row',
        },
        glNaziv: {
            width: '185px',
            fontSize: 10,
            paddingLeft: '5px',
            paddingTop: '7px',
        },
        glOstalo: {
            width: '62px',
            fontSize: 10,
            textAlign: 'center',
            borderColor: 'black',
            borderStyle: 'solid',
            borderLeftWidth: 1,
            paddingTop: '1px',
        },
        poljeRed: {
            height: '17px',
            borderWidth: 1,
            borderColor: 'black',
            borderStyle: 'solid',
            flexDirection: 'row',
        },
        poljeRed2: {
            height: '17px',
            borderWidth: 1,
            borderColor: 'black',
            borderStyle: 'solid',
            flexDirection: 'row',
            marginBottom: '10px',
            marginTop: '10px'
        },
        poljeRed3: {
            height: '17px',
            borderWidth: 1,
            borderColor: 'black',
            borderStyle: 'solid',
            flexDirection: 'row',
            marginTop: '10px'
        },
        poljeNaziv: {
            width: '185px',
            fontSize: 10,
            paddingLeft: '5px',
            paddingTop: '2px',
        },
        poljeNaziv2: {
            width: '145px',
            fontSize: 10,
            paddingLeft: '5px',
            paddingTop: '2px',
            borderColor: 'black',
            borderStyle: 'solid',
            borderLeftWidth: 1,
        },
        poljeKolicina: {
            width: '40px',
            fontSize: 10,
            paddingLeft: '5px',
            paddingTop: '2px',
        },
        poljeOstalo: {
            width: '62px',
            fontSize: 10,
            textAlign: 'center',
            borderColor: 'black',
            borderStyle: 'solid',
            borderLeftWidth: 1,
            paddingTop: '2px',
        },
        poljeOstalo2: {
            width: '278px',
            fontSize: 10,
            textAlign: 'center',
            paddingTop: '2px',
        },
        poljeOstalo3: {
            width: '278px',
            fontSize: 10,
            textAlign: 'center',
            borderColor: 'black',
            borderStyle: 'solid',
            borderLeftWidth: 1,
            paddingTop: '2px',
        },
        poljeOstalo4: {
            width: '92.6px',
            fontSize: 10,
            textAlign: 'center',
            paddingTop: '2px',
            paddingLeft: '4px'
        },
        poljeOstalo5: {
            width: '92.6px',
            fontSize: 10,
            textAlign: 'center',
            borderColor: 'black',
            borderStyle: 'solid',
            borderLeftWidth: 1,
            paddingTop: '2px',
            paddingLeft: '4px'
        },
        

        
    }
})