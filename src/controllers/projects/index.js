import dataProjects from '../../data/projects'

const index = (req, res) => {
  res.json(dataProjects)
}

const show = (req, res) => {
  const { project } = req
  res.json(project)
}

const update = (req, res) => {
  const { id } = req.params
  const { title } = req.body
  const project = dataProjects.find(el => el.id === id )
  
  project.title = title
  res.send({"log": "project updated"})
}

const store = (req, res) => {
  const {
    id,
    title,
    tasks
  } = req.body

  dataProjects
    .push({
      id,
      title,
      tasks
    })

  res.send({ "log": "project created" })
}

const destroy = (req, res) => {
  const { id } = req.params
  const projectIndex = dataProjects.findIndex(el => el.id === id)
  dataProjects.splice(projectIndex, 1)

  res.send({ log: 'project deleted' })
}

const methods = {
  index,
  show,
  store,
  update,
  destroy
}

export default methods