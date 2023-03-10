const JSON = require('JSON');
const axios = require('axios');

const url = "https://hsltaskuvari.onrender.com/api/color";

let color = ""
let utcExpiry = ""

axios.get(url)
    .then(response => {
        const data = response.data

        color = data["color"]
        utcExpiry = data["utcExpiry"]

        console.log(`\n-- KolmiHSL -- \n\nUTCExpiry: "${utcExpiry}" \nColor: "${color}" `)
    })
    .catch(error => console.error(error));