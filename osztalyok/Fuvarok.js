const { Fuvar } = require('./Fuvar');
const readline = require('readline');
const fs = require('fs');

class Fuvarok {

    constructor(fajlNev){

        this.fajlNev = fajlNev;
        this.fuvarLista = [];
        
        const rl = readline.createInterface({
            input: fs.createReadStream(fajlNev),
            crlfDelay: Infinity
        });
        
        console.log('Várakozás az adatok feldolgozására...');
        rl.on('line', (sor) => {
            
            //console.log(`Line from file: ${sor}`);
            this.fuvarLista.push(new Fuvar(sor));
            
        }).on('error', (error) => {
            
            console.log('Hiba: ' + error);
        }).on('close', () => {
            
            console.log('Feldolgozás befejezve!');
        });
        
    }
        
    getFuvarLista(){
        return this.fuvarLista;
    }

    _3Feladat(){

        console.log(`3.Feladat: ${ this.fuvarLista.length } fuvar`);
    }

    _4Feladat(){
        
        const esetek = this.fuvarLista
        .filter(f => f.gettaxi_id() == 6185);

        var penz = 0;
        esetek.forEach(f => penz += (f.borravalo + f.viteldij))

        console.log(`4.feladat: ${ esetek.length } alatt: ${ penz }$`);
    }

    

}
module.exports = { Fuvarok };