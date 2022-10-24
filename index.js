const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const catagorys = require('./data/catagorys.json')

app.get('/', (req, res) => {
    res.send('NEWS API Running');
});

app.get('/news-catagories', (req, res) => {
    res.send(catagorys)
})

app.listen(port, () => {
    console.log('Dragon News server running on port', port);
});