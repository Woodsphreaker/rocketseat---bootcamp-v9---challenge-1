// data
import dataLog from '../../data/apiLog'

const index = (req, res) => res.send(dataLog)

const methods = {
  index
}

export default methods