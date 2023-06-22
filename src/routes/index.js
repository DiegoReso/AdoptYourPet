const router = require('express').Router()
const CustomersControler = require('../controllers/customers')
const IndexController = require('../controllers/index')

//rotas
router.get('/', IndexController.index)



//registro
router.get('/register', CustomersControler.index )
router.post('/register', CustomersControler.add)

//listar users
router.get('/list', CustomersControler.listUsers)

//editar
router.get('/edit', CustomersControler.formEdit)

router.post('/edit/:id', CustomersControler.edit)

router.get('/remove/:id', CustomersControler.remove)

module.exports = router



