const { Fuvarok } = require('./osztalyok/Fuvarok');

const f = new Fuvarok('./forras/fuvar.csv');

setTimeout(() => {
    
    f._3Feladat();
    f._4Feladat();
    f._5feladat();
    f._6feladat();
    f._7feladat();
    f._8feladat();

}, 20);