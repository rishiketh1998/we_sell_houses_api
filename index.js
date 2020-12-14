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
app.use('/v1/users', users)
app.use('/v1/login', login)
app.use('/v1/logout', logout)
app.use('/v1/properties', properties)
app.use('/v1/messages', messages)
app.use('/v1/areaProperties', areaProperties)

app.get('/', (req,res) => {
    res.send('We Sell Houses Backend')
})

module.exports = app

