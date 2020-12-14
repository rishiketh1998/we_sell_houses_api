const app = require('./index.js')

/**
 * @description: starts the server on "process.env.PORT" port
 */
app.listen(process.env.PORT, () => {
    console.log(`server running on ${process.env.PORT}`)
})