const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const catagorys = require('./data/catagorys.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('NEWS API Running');
});

app.get('/news-catagories', (req, res) => {
    res.send(catagorys)
})

app.get('/catagory/:id', (req, res) => {
    const id = req.params.id;
    if(id === '08'){
        res.send(news)
    }
    else{
        const catagoryId = news.filter(n => n.category_id === id);
        res.send(catagoryId);
    }
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find( n => n._id === id);
    res.send(selectedNews);
})

app.listen(port, () => {
    console.log('Dragon News server running on port', port);
});