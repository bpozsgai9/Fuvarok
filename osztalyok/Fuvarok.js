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

    _5feladat(){

        let stat = new Map();
        this.fuvarLista.forEach((fuvar) => {
            var f = fuvar;
            if (!stat.has(f.getfizetes_modja())){
                stat.set(f.getfizetes_modja(), 1);
            } else {
                stat.set(f.getfizetes_modja(), stat.get(f.getfizetes_modja()) + 1);
            }
        });

        console.log(`5.feladat: `);
        stat.forEach((value, key) => {
            console.log(`\t${ key } : ${ value } fuvar`);
          })
    }

    _6feladat(){

        var merfold = 0;
        this.fuvarLista.forEach((f) => {
            merfold += f.gettavolsag();
        });        
        var km = merfold * 1.6;
        console.log(`6. feladat: ${ km } km`);
    }

    _7feladat(){

        var leghosszabb = null;
        this.fuvarLista.forEach(f => {
            if (f.getidotartam() > leghosszabb) {
                leghosszabb = f.getidotartam();
            }
        });

        var leghosszabbFuvar = null;
        this.fuvarLista
        .forEach(f => {
            if (f.getidotartam() == leghosszabb) {
                leghosszabbFuvar = f;
            }
        });
        console.log(`7.feladat: Leghosszabb fuvar:
            Fuvar hossza: ${ leghosszabbFuvar.idotartam } másodperc
            Taxi azonosító: ${ leghosszabbFuvar.taxi_id }
            Megtett távolság: ${ leghosszabbFuvar.tavolsag }
            Viteldíj: ${ leghosszabbFuvar.viteldij }$
        `);
    }

    _8feladat(){

        const helyNev = './hibak.txt'
        var irandoSzoveg = '';
        this.fuvarLista
        .filter(f => f.getidotartam() > 0 && f.viteldij > 0 && f.tavolsag == 0)
        .forEach((f) => {
            
            irandoSzoveg += 
            f.taxi_id + ';' + 
            f.indulas + ';' + 
            f.idotartam + ';' + 
            f.tavolsag + ';' + 
            f.viteldij + ';' + 
            f.borravalo + ';' + 
            f.fizetes_modja; + '\n';
            
        });

        fs.writeFile(helyNev, irandoSzoveg, () =>{
            console.log('8.feladat: hibak.txt');    
        });
    }


    

}
module.exports = { Fuvarok };