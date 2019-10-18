import { Router } from 'express'
const router = Router()

// ***  middlewares ***
import isValidProject from './middlewares/isValidProject'
import existisProject from './middlewares/existsProjetc'

// *** Controlleres *** 
import logsController from './controllers/app-logs'
import tasksController from './controllers/task'
import projectsController from './controllers/projects/index'

// *** Routes ***
 
// -- Projects
router.get('/projects', projectsController.index)
router.get('/projects/:id', isValidProject, projectsController.show)
router.put('/projects/:id', isValidProject, projectsController.update)
router.post('/projects', existisProject, projectsController.store)
router.delete('/projects/delete/:id', isValidProject, projectsController.destroy)

// -- tasks
router.post('/projects/:id/tasks', isValidProject, tasksController.store)

// -- logs -- 
router.get('/log', logsController.index)

export default router