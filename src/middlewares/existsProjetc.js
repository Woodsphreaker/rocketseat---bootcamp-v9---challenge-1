import data from '../data/projects'

export default (req, res, next) => {
  const { id } = req.body
  const project = data.find(el => el.id === id)

  if (project) {
    return res.status(400).send({error: 'there is already a project with this id'})
  } 

  next()
}