const express = require('express');
const { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask } = require('../controllers/tasksCtrl');
const router = express.Router();

router.route('/').get(getAllTasks);
router.route('/').post(createNewTask);
router.route('/:id').get(getSingleTask);
router.route('/:id').patch(updateTask);
router.route('/:id').delete(deleteTask);

module.exports = router;





// app.get('api/v1/tasks')          - get all the tasks
// app.post('api/v1/tasks')         - create new task
// app.get('api/v1/tasks/:id')      - get single task
// app.put('api/v1/tasks/:id')    - update task
// app.delete('api/v1/tasks/:id')   - delete task