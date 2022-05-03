const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');
const cors = require('cors')
require('dotenv').config()


const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())



/*  */

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.1ktnr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });





app.get('/', (req, res) => {
    res.send('Hello Worlds!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on new port ${port}`)
  })
  