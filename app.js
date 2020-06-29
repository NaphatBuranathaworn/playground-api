var compression = require('compression')
var express = require('express')
var app = express()
app.use(compression())
app.listen(process.env.PORT || 3000);

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
