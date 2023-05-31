const express = require('express')
const cors = require('cors');
const { db } = require('./db/db'); // Import the db function correctly
const  {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares 
app.use(express.json())
app.use(cors()) // cors({Put domain/where who u want server to get accessed by})

//routes 
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route )))

const server = () => {
    db()
    app.listen(PORT,() => {
        console.log('listening to port:', PORT)
    })
}
 
server()