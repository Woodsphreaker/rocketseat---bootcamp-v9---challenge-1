// data
import dataProjects from '../../data/projects'

const store = (req, res) => {
  const { id } = req.params
  const { title } = req.body
  const project = dataProjects.find(el => el.id === id )
  
  project.tasks.push(title)

  res.send({"log": "task created"})
}

const methods = {
  store
}

export default methods