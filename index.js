const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const connection = require('./helpers/connection.js')
const users = require('./routes/users.js')
const login = require('./routes/login.js')
const logout = require('./routes/logout.js')
const properties = require('./routes/properties.js')
const messages = require('./routes/messages.js')
const areaProperties = require('./routes/areaProperties.js')
const cors = require('cors')

dotenv.config({path: './.env'})
connection() //connecting to the database
const app = express()

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(cors())
app.use(cookieParser())
app.use(['/api/v1/users','/proxy/api/v1/users'], users)
app.use(['/api/v1/login','/proxy/api/v1/login'], login)
app.use(['/api/v1/logout','/proxy/api/v1/logout'], logout)
app.use(['/api/v1/properties','/proxy/api/v1/properties'], properties)
app.use(['/api/v1/messages','/proxy/api/v1/messages'], messages)
app.use(['/api/v1/areaProperties','/proxy/api/v1/areaProperties'], areaProperties)

module.exports = app

