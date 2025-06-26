const express =require('express')
const  { createTask, getTasks, updateTask, deleteTask, getMyTasks } =require('../controllers/taskController.js') ;
const { verifyToken, isAdmin } =require('../middleware/authMiddleware.js') ;

const router = express.Router();

router.get('/', verifyToken, getTasks);
router.get('/my', verifyToken, getMyTasks);
router.post('/', verifyToken, isAdmin, createTask);
router.put('/:id', verifyToken, updateTask);
router.delete('/:id', verifyToken, isAdmin, deleteTask);

module.exports=router

