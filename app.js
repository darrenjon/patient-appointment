// require packages used in the project
const express = require('express')
const methodOverride = require('method-override')

const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(routes)

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})