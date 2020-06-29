var compression = require('compression')
var express = require('express')
const port = 3000
var app = express()
app.use(compression())

app.get('/', function (req, res) {
    res.send(JSON.stringify({ Hello: 'world' }));
});

app.get('/search', function (req, res) {
    // Simulating async operation

    console.log('dd : ', req);
    setImmediate(function () {
        var jsonStr = req.query.params
        try {
            var jsonObj = JSON.parse(jsonStr)
            res.send('Success')
        } catch (e) {
            res.status(400).send('Invalid JSON string')
        }
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))