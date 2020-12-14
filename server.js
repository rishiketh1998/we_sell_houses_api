const app = require('./index.js')

/**
 * @description: starts the server on "process.env.PORT" port
 */
app.listen(process.env.PORT || 5000, () => {
    console.log(`server running on ${process.env.PORT}`)
})