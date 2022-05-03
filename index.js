const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');
const cors = require('cors')
require('dotenv').config()


const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello Worlds!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on new port ${port}`)
  })
  