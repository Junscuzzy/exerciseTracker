// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve('views/index.html'))
})


// Not found middleware
app.use((req, res, next) => next({ status: 404, message: 'not found' }))

// Error Handling middleware
app.use((err: any, req: Request, res: Response) => {
  let errCode; let
    errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Listening on http://localhost:${port}!`))
