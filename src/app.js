import express from 'express'
const app = express()

// middleware
import logApiRequest from './middlewares/logApiRequests'

// routes
import routes from './routes'

// use middleware
app.use(logApiRequest)
app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
  res.send('Server running on port 3000')
})

app.listen(3000, () => console.log('Server running on port 3000'))