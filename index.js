const express = require("express")
const app = express()

// data
const datLog = require('./data/apiLog')

// middleware
const logApiRequest = require('./middlewares/logApiRequests')

// use middleware
app.use(logApiRequest(datLog))
app.use(express.json())

// modules
const projects = require('./modules/projects')

// route to /projects
app.use('/projects', projects)

app.get('/log', (req, res) => {
  res.json(datLog)
})

app.get('/', (req, res) => {
  res.send('Server running on port 3000')
})

app.listen(3000, () => console.log('Server running on port 3000'))