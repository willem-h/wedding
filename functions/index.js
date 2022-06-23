const cors = require('cors')
const express = require("express")
const fetch = require("node-fetch")
const functions = require("firebase-functions")

// import cors from 'cors'
// import express from 'express'
// import fetch from 'node-fetch'
// import functions from 'firebase-functions'

const app = express()

app.use(cors({ origin: true }))


app.post('/', (request, response) => {
  functions.logger.info(`New RSVP: ${request.body.name}`)
  // response.send(request.body.name)
  fetch('https://maker.ifttt.com/trigger/rsvp/with/key/c01X5W-6J65sXhMSX6e8Rg', {
    method: 'post',
    body: JSON.stringify(request.body),
    headers: {'Content-Type': 'application/json'}
  })
  .catch(functions.logger.error)
  response.end()
})

exports.rsvp = functions.https.onRequest(app)
// const rsvp = functions.https.onRequest(app)
