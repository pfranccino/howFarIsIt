const argv = require('yargs').options({
        origin: {
            alias: 'o',
            desc: 'con este parametro podemos ingresar nuestro punto origen ',
            demand: true
        }
    })
    .options({
        final: {
            alias: 'f',
            desc: 'con este parametro ingresaremos nuestro punto de llegada',
            demand: true

        }
    })
    .options({
        modo: {
            alias: 'm',
            desc: 'con este parametro ingresaremos nuestro punto de viaje',
        }

    })
    .help()
    .argv;


module.exports = {
    argv
}