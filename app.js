const argv = require('./config/yargs').argv;
const color = require('colors');


const { getData } = require('./api/apiGoogle');


getData(argv.origin, argv.final, argv.modo)
    .then(msje => {
        console.log('=============================================================='.red);
        console.log(`Desde : ${msje.start}`);
        console.log(`Hasta : ${msje.final}`);
        console.log(`Distancia: ${msje.distancia}`);
        console.log(`Duracion viaje: ${msje.time}`);
        console.log('=============================================================='.red);
    })
    .catch(e => console.log(e));