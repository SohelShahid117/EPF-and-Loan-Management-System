// const express = require('express')
import express from 'express'
// const cors = require('cors')
import cors from 'cors'
import authRouter from "./routes/auth.js"
import connectToDb from "./db/db.js"

import departmentRouter from "./routes/department.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/auth",authRouter)
app.use("/api/department",departmentRouter)

connectToDb()


// require('dotenv').config()

const port = 3000
// const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`my server is running at http://localhost:${port}`)
})