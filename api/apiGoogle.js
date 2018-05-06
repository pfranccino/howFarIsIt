const axios = require('axios');


let getData = async(origins, finals, mode) => {

    let encodeOrigin = encodeURI(origins)
    let encodeFinal = encodeURI(finals)
    let encodeMode = encodeURI(mode)



    let answers = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeOrigin}&destinations=${encodeFinal}&mode=${encodeMode}&key=`)

    let element = answers.data.rows[0].elements[0];

    if (element.status === 'ZERO_RESULTS') {

        throw new Error('La distancia no ha podida ser calculada por nuestros proveedores');



    } else {
        let point = answers.data;
        let distancia = element.distance;
        let time = element.duration;




        return {
            start: point.origin_addresses[0],
            final: point.destination_addresses[0],
            distancia: distancia.text,
            time: time.text
        }
    }

}





module.exports = {
    getData
}