class Fuvar {

    constructor(sor){
        
        var adatok = [];
        adatok = sor.split(';');

        this.taxi_id = parseInt(adatok[0]);
        this.indulas = new Date().valueOf(adatok[1]);
        this.idotartam = parseInt(adatok[2]);
        this.tavolsag = parseFloat(adatok[3].replace(',','.'));
        this.viteldij = parseFloat(adatok[4].replace(',','.'));
        this.borravalo = parseFloat(adatok[5].replace(',','.'));
        this.fizetes_modja = adatok[6];
    }

    gettaxi_id(){
        return this.taxi_id;
    }
    getindulas(){
        return this.indulas;
    }
    getidotartam(){
        return this.idotartam;
    }
    gettavolsag(){
        return this.tavolsag;
    }
    getviteldij(){
        return this.viteldij;
    }
    getborravalo(){
        return this.borravalo;
    }
    getfizetes_modja(){
        return this.fizetes_modja;
    }
}
module.exports = { Fuvar };