const express = require('express');
const app = express();
const cors = require('cors')
require('./startup/connectdb')();
require('./startup/routes')(app);

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5455
const server = app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = server;