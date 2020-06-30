const compression = require('compression')
const express = require('express')
const app = express()

app.use(compression())
app.listen(process.env.PORT || 3000)
require('dotenv/config')

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const openApiDocumentation = YAML.load('./api.yaml')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

const catalogRouter = require('./routes/catalog');
app.use('/catalog', catalogRouter);
