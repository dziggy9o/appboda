
//Proracun potreba

// Osnovno
//
export function metabolickaMasa(a) {
    var metabMasa = Math.pow(a, 0.75);
    return metabMasa.toFixed(2);
};


export function fcM(a,b) {
    var fcmm = a * (0.4 + (0.15 * b));
    return fcmm.toFixed(4);
};

export function ksM(a,b) {
    var ksMm = ((0.025 * a) + (0.1 * b));
    return ksMm.toFixed(2);
};
// UZDRZANE POTREBE
//*

export function neL(a, b) {
    if (a <= 1) {
        var nela = b * 0.293 * 1.2;
        return nela.toFixed(2);}
    else if (a <= 2) {
        var nelb =  b * 0.293 * 1.1;
        return nelb.toFixed(2);
    }
    else {
        var nelc = b * 0.293;
        return nelc.toFixed(2);
    }
    
}
export function ssP(a, b) {
    if (a <= 1) {
        var sspa = b * 2.7 * 1.2;
        return sspa.toFixed(2);}
    else if (a <= 2) {
        var sspb =  b * 2.7 * 1.1;
        return sspb.toFixed(2);
    }
    else {
        var sspc = b * 2.7;
        return sspc.toFixed(2);
    }
};
export function Ca(a, b) {
    if (a <= 1) {
        var caa = b * 0.06 * 1.2;
        return caa.toFixed(2);}
    else if (a <= 2) {
        var cab =  b * 0.06 * 1.1;
        return cab.toFixed(2);
    }
    else {
        var cac = b * 0.06;
        return cac.toFixed(2);
    }  
};
export function fosforMin(a, b) {
    if (a <= 1) {
        var ffma = b * 0.045 * 1.2;
        return ffma.toFixed(2);}
    else if (a <= 2) {
        var ffmb =  b * 0.045 * 1.1;
        return ffmb.toFixed(2);
    }
    else {
        var ffmc = b * 0.045;
        return ffmc.toFixed(2);
    }  
};

//POTREBE ZA PROIZVODNJU MLEKA
export function neLPPM(a,b) {
    if (b <= 7) {
       var nel = a * 3.1;
        return nel.toFixed(2); 
    }
    else {
        return 0;
    }
    
};
export function ssPPPM(a,b) {
    if (b <= 7) {
        var ssp = 60 * a;
        return ssp.toFixed(2); 
    }
    else {
        return 0;
    }
};
export function CaPPM(a,b) {
    if (b <= 7) {
        var ca = a * 3.1;
        return ca.toFixed(2);
    }
    else {
        return 0;
    }
};
export function fosforMinPPM(a,b) {
    if (b <= 7) {
        var fosformin = a * 1.7;
        return fosformin.toFixed(2);
    }
    else {
        return 0;
    }
    
    
};
//OSTALE POTREBE
export function sPj(a, b) {
    if (b <= 1) {
    if (a <= 450) {
        return 341 * 1.2;}
    else if (a <= 500) {
        return 364 * 1.2;}
    else if (a <= 550) {
        return 386 * 1.2;}
    else if (a <= 600) {
        return 406 * 1.2;}
    else if (a <= 650) {
        return 428 * 1.2;}
    else if (a <= 700) {
        return 449 * 1.2;}
    else if (a <= 750) {
        return 468 * 1.2;}
    else {
        return 486 * 1.2;
    }}
    else if (b <= 2) {
    if (a <= 450) {
        return 341 * 1.1;}
    else if (a <= 500) {
        return 364 * 1.1;}
    else if (a <= 550) {
        return 386 * 1.1;}
    else if (a <= 600) {
        return 406 * 1.1;}
    else if (a <= 650) {
        return 428 * 1.1;}
    else if (a <= 700) {
        return 449 * 1.1;}
    else if (a <= 750) {
        return 468 * 1.1;}
    else {
        return 486 * 1.1;
    }}
    else {
    if (a <= 450) {
        return 341;}
    else if (a <= 500) {
        return 364;}
    else if (a <= 550) {
        return 386;}
    else if (a <= 600) {
        return 406;}
    else if (a <= 650) {
        return 428;}
    else if (a <= 700) {
        return 449;}
    else if (a <= 750) {
        return 468;}
    else {
        return 486;
    }}

};
export function sP(a, b) {
    if (a <= 450) {
        return 341 + b * 90;}
    else if (a <= 500) {
        return 364 + b * 90;}
    else if (a <= 550) {
        return 386 + b * 90;}
    else if (a <= 600) {
        return 406 + b * 90;}
    else if (a <= 650) {
        return 428 + b * 90;}
    else if (a <= 700) {
        return 449 + b * 90;}
    else if (a <= 750) {
        return 468 + b * 90;}
    else {
        return 486 + b * 90;
    }
};

export function MaxKonzSM(a, b) {
    if (a <= 50) {
        var maxa = b * 0.6 * 0.82;
        return maxa.toFixed(2);}
    else if (a <= 100) {
        var maxb =  b * 0.5;
        return maxb.toFixed(2);
    }
    else if (a <= 305) {
        var maxc = b * 0.4;
        return maxc.toFixed(2);
    }
    else {
        return 'Krava je zasušena';
    }
}
export function MaxKonzSMkoncdeo(a, b, c) {
    if (c <= 7) {
        if (a <= 50) {
            var maxa = b * 0.6;
            return maxa.toFixed(2);}
        else if (a <= 100) {
            var maxb =  b * 0.5;
            return maxb.toFixed(2);
        }
        else {
            var maxc = b * 0.4;
            return maxc.toFixed(2);
        }   
    }
    else if (c === 8) {
        if (a > 305) {
            var maxd = b * 0.2;
            return maxd.toFixed(2);   
        }
        else {
            return 'Greška';
        }
    }
    else  {
        if (a > 305) {
            var maxe = b * 0.3;
            return maxe.toFixed(2);   
        }
        else {
            return 0;
        } 
        
    }
     
    }
export function MinKonzSMkabdeo (a, b, c) {
    if (c <= 7) {
        if (a <= 100) {
            var tma = b / 100 * 1.6;
            return tma.toFixed(2);
        }
        else if (a <= 200) {
            var tmb = b / 100 * 1.8;
            return tmb.toFixed(2);
        }
        else {
            var tmc = b / 100 * 1.9;
            return tmc.toFixed(2);            
        }
    }
    else {
        if (a > 305) {
            var tmg = b / 100 * 1.2;
            return tmg.toFixed(2);
        }
        else {
            return 0;
        }
    }
    
}

export function korigovanjeSM(a, b) {
    if (a <= 50) {
        return b * 0.82;
    }
    else {
        return b;
    }
}
export function povecanjeNELst(a, b, c, d) {
    if (c === 7) {
        if (d === 0) {
           return a + b + 6.4; 
        }
        else if (d <= 199) {
            return a + b + 6.4 + 2.2; 
        }
        else if (d <= 299) {
            return a + b + 6.4 + 4.3; 
        }
        else if (d <= 399) {
            return a + b + 6.4 + 6.5; 
        }
        else if (d <= 499) {
            return a + b + 6.4 + 8.6; 
        }
        else {
            return a + b + 6.4 + 10.8; 
        }
    }
    else if (c === 8) {
        if (d === 0) {
           return a + b + 11.3; 
        }
        else if (d <= 199) {
            return a + b + 11.3 + 2.4; 
        }
        else if (d <= 299) {
            return a + b + 11.3 + 4.7; 
        }
        else if (d <= 399) {
            return a + b + 11.3 + 7.1; 
        }
        else if (d <= 499) {
            return a + b + 11.3 + 9.5; 
        }
        else {
            return a + b + 11.3 + 11.9; 
        }
        
    }
    else if (c === 9) {
        if (d === 0) {
           return a + b + 18.4; 
        }
        else if (d <= 199) {
            return a + b + 18.4 + 2.4; 
        }
        else if (d <= 299) {
            return a + b + 18.4 + 4.7; 
        }
        else if (d <= 399) {
            return a + b + 18.4 + 7.1; 
        }
        else if (d <= 499) {
            return a + b + 18.4 + 9.5; 
        }
        else {
            return a + b + 18.4 + 11.9; 
        }
    }
    else {
        if (d === 0) {
           return a + b; 
        }
        else if (d <= 199) {
            return a + b + 2.2; 
        }
        else if (d <= 299) {
            return a + b + 4.3; 
        }
        else if (d <= 399) {
            return a + b + 6.5; 
        }
        else if (d <= 499) {
            return a + b + 8.6; 
        }
        else {
            return a + b + 6.4 + 10.8; 
        }
    }
}

export function povecanjeSSPst(a, b, c, d) {
    if (c === 7) {
        if (d === 0) {
           return a + b + 95; 
        }
        else if (d <= 199) {
            return a + b + 95 + 31; 
        }
        else if (d <= 299) {
            return a + b + 95 + 62; 
        }
        else if (d <= 399) {
            return a + b + 95 + 93; 
        }
        else if (d <= 499) {
            return a + b + 95 + 124; 
        }
        else {
            return a + b + 95 + 155; 
        }
    }
    else if (c === 8) {
        if (d === 0) {
           return a + b + 160; 
        }
        else if (d <= 199) {
            return a + b + 160 + 31; 
        }
        else if (d <= 299) {
            return a + b + 160 + 62; 
        }
        else if (d <= 399) {
            return a + b + 160 + 93; 
        }
        else if (d <= 499) {
            return a + b + 160 + 124; 
        }
        else {
            return a + b + 160 + 155; 
        }
    }
    else if (c === 9) {
        if (d === 0) {
           return a + b + 245; 
        }
        else if (d <= 199) {
            return a + b + 245 + 31; 
        }
        else if (d <= 299) {
            return a + b + 245 + 62; 
        }
        else if (d <= 399) {
            return a + b + 245 + 93; 
        }
        else if (d <= 499) {
            return a + b + 245 + 124; 
        }
        else {
            return a + b + 245 + 155; 
        }
    }
    else {
        if (d === 0) {
           return a + b; 
        }
        else if (d <= 199) {
            return a + b + 31; 
        }
        else if (d <= 299) {
            return a + b + 62; 
        }
        else if (d <= 399) {
            return a + b + 93; 
        }
        else if (d <= 499) {
            return a + b + 124; 
        }
        else {
            return a + b + 155; 
        }
    }
}
export function povecanjeCa(a, b, c, d) {
    if (c === 7) {
        if (d === 0) {
           return a + b + 9; 
        }
        else if (d <= 199) {
            return a + b + 9 + 3; 
        }
        else if (d <= 299) {
            return a + b + 9 + 6.5; 
        }
        else if (d <= 399) {
            return a + b + 9 + 9.5; 
        }
        else if (d <= 499) {
            return a + b + 9 + 13; 
        }
        else {
            return a + b + 9 + 16; 
        }
    }
    else if (c === 8) {
        if (d === 0) {
           return a + b + 16; 
        }
        else if (d <= 199) {
            return a + b + 16 + 3; 
        }
        else if (d <= 299) {
            return a + b + 16 + 6.5; 
        }
        else if (d <= 399) {
            return a + b + 16 + 9.5; 
        }
        else if (d <= 499) {
            return a + b + 16 + 13; 
        }
        else {
            return a + b + 16 + 16; 
        }
    }
    else if (c === 9) {
        if (d === 0) {
           return a + b + 25; 
        }
        else if (d <= 199) {
            return a + b + 25 + 3; 
        }
        else if (d <= 299) {
            return a + b + 25 + 6.5; 
        }
        else if (d <= 399) {
            return a + b + 25 + 9.5; 
        }
        else if (d <= 499) {
            return a + b + 25 + 13; 
        }
        else {
            return a + b + 25 + 16; 
        }
    }
    else {
        if (d === 0) {
           return a + b; 
        }
        else if (d <= 199) {
            return a + b + 3; 
        }
        else if (d <= 299) {
            return a + b + 6.5; 
        }
        else if (d <= 399) {
            return a + b + 9.5; 
        }
        else if (d <= 499) {
            return a + b + 13; 
        }
        else {
            return a + b + 16; 
        }
    }
}
export function povecanjeP(a, b, c, d) {
    if (c === 7) {
        if (d === 0) {
           return a + b + 3; 
        }
        else if (d <= 199) {
            return a + b + 3 + 1.3; 
        }
        else if (d <= 299) {
            return a + b + 3 + 2.6; 
        }
        else if (d <= 399) {
            return a + b + 3 + 3.8; 
        }
        else if (d <= 499) {
            return a + b + 3 + 5.1; 
        }
        else {
            return a + b + 3 + 6.4; 
        }
    }
    else if (c === 8) {
        if (d === 0) {
           return a + b + 5.5; 
        }
        else if (d <= 199) {
            return a + b + 5.5 + 1.3; 
        }
        else if (d <= 299) {
            return a + b + 5.5 + 2.6; 
        }
        else if (d <= 399) {
            return a + b + 5.5 + 3.8; 
        }
        else if (d <= 499) {
            return a + b + 5.5 + 5.1; 
        }
        else {
            return a + b + 5.5 + 6.4; 
        }
    }
    else if (c === 9) {
        if (d === 0) {
           return a + b + 8.5; 
        }
        else if (d <= 199) {
            return a + b + 8.5 + 1.3; 
        }
        else if (d <= 299) {
            return a + b + 8.5 + 2.6; 
        }
        else if (d <= 399) {
            return a + b + 8.5 + 3.8; 
        }
        else if (d <= 499) {
            return a + b + 8.5 + 5.1; 
        }
        else {
            return a + b + 8.5 + 6.4; 
        }
    }
    else {
        if (d === 0) {
           return a + b; 
        }
        else if (d <= 199) {
            return a + b + 1.3; 
        }
        else if (d <= 299) {
            return a + b + 2.6; 
        }
        else if (d <= 399) {
            return a + b + 3.8; 
        }
        else if (d <= 499) {
            return a + b + 5.1; 
        }
        else {
            return a + b + 6.4; 
        }
    }
}
export function suvamaterijaHranivo (a,b){
    var smh = a * b / 1000;
    return smh.toFixed(2);
}
export function mnozSM (a, b, c) {
    var msmh = a * b / 1000 * c;
    return msmh.toFixed(2);
}


export function npnMax(a) {
    return a * 30 / 100;
};
export function ppmSP (a,b) {
    if (b <=7) {
        var ppmSPP = a * 90;
        return ppmSPP.toFixed(2);   
    }
    else {
        return 0;
    }
        
};
export function sabiranje(a,b){
     
    return a + b;
}
export function sabiranjetri(a,b,c){
     
    return a + b +c;
}
export function oduzimanje(a,b){
    var oduz = a - b;
    return oduz.toFixed(2);
}
export function mnoz(a,b)
    {return a * b;};

export function mnozsadeset(a,b)
    {return a * b * 10;};
export function deljenje(a,b)
    {
    return a / b;
};
export function izrProcenat(a,b) {
    var proc = a / b * 100;
    return proc.toFixed(2);
};