import data from '../data/apiLog'

export default (req, res, next) => {
  const { method } = req
    
  const newLog = {
    method,
    date: new Date()
  }

  data
  .push(newLog)

  console.log(`${data.length} requisições`)
  
  return next()
}