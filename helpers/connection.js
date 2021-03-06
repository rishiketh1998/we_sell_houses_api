const mongoose = require('mongoose')

/**
 * @description: creates connection to the database (mongoDB)
 */
const connection = () => {
    mongoose.connect(process.env.MONGO_DB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    mongoose.connection.once('open', () => {
        console.log('Connection has been made')
    }).on('error',() => {
        console.log('Error Connection has not been connected')
    })
}

module.exports = connection
