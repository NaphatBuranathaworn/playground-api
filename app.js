const compression = require('compression')
const express = require('express')
const app = express()
const port = process.env.PORT
console.log('START port : ', port)
app.use(compression())
app.listen(port)
require('dotenv/config')

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const openApiDocumentation = YAML.load('./api.yaml')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

const catalogRouter = require('./routes/catalog');
app.use('/catalog', catalogRouter);
