// Load express
const express = require('express')
// Load cors
const cors = require('cors')
// Setup our Express app
const app = express()
// Set PORT
const PORT = 8080

// Add Routes
// const exampleRoutes = require('./routes/exampleRoutes')

app.use(express.json())
app.use(cors())

// Use Routes
// app.use('/example', exampleRoutes)

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})