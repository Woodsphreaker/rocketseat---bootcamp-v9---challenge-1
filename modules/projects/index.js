const { Router } = require('express')
const router = Router()

// data
const dataProjects = require('../../data/projects')

// middleware
const isValidproject = require('../../middlewares/isValidProject')
const existsProject = require('../../middlewares/existsProjetc')

// routes
router.get('/', (req, res) => {
  res.json(dataProjects)
})

router.get('/:id', isValidproject(dataProjects), (req, res) => {
  const { project } = req
  res.json(project)
})

router.put('/:id', isValidproject(dataProjects), (req, res) => {
  const { id } = req.params
  const { title } = req.body
  const project = dataProjects.find(el => el.id === id )
  
  project.title = title
  res.send({"log": "project updated"})
})

router.post('/', existsProject(dataProjects), (req, res) => {
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

  res.send({"log": "project created"})
})

// Tasks
router.post('/:id/tasks', isValidproject(dataProjects), (req, res) => {
  const { id } = req.params
  const { title } = req.body
  const project = dataProjects.find(el => el.id === id )
  
  project.tasks.push(title)

  res.send({"log": "task created"})
})

router.delete('/:id', isValidproject(dataProjects), (req, res) => {
  const { id } = req.params
  const projectIndex = dataProjects.findIndex(el => el.id === id)
  dataProjects.splice(projectIndex, 1)

  res.send('delete a project')
})

module.exports = router