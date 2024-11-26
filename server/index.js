// import express from "express"
// const express = require('express')
import express from 'express'
// const cors = require('cors')
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())

// require('dotenv').config()

// const port = 3000
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`my server is running at http://localhost:${port}`)
})