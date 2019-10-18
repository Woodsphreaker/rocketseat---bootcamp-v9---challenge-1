import data from '../data/projects'

export default (req, res, next) => {
  const { id } = req.params
  const project = data.find(el => el.id === id)

  if (!project) {
    return res.status(400).send({error: 'The project not exists'})
  } 

  req.project = project

  next()
}
