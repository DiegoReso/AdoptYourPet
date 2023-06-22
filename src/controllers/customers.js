const CustomersModel = require('../models/customers')
const {crypto} = require('../utils/password')

const defaultTitle = 'Cadastro de Pet'

function index(req,res){
  res.render('register',{
    title: defaultTitle
  })
}


async function add (req,res){
  const {
    name,
    age,
    email,
    password,
    pet
  } =  req.body
  

  const passwordCrypto = await crypto(password)

  const register = new CustomersModel ({
    name,
    age,
    email,
    password: passwordCrypto,
    pet,
  })


  register.save()

  res.render('register',{
    title: defaultTitle,
    message: 'Cadastrado com sucesso'
  }
  )

}

async function listUsers(req,res){
  
  const users = await CustomersModel.find()



  res.render('list',{
    title: 'Lista de Pets',
    users
  })
}


async function formEdit(req,res){

  const {id}= req.query
  
  const user = await CustomersModel.findById(id)
  
  
  res.render('edit',{
    title: 'Editar Pet',
    user

  })

}


async function edit(req,res){
  
  const {id} = req.params

  const {
    name,
    age,
    email,
    pet,
  } =  req.body
  
  const user = await CustomersModel.findById(id)

  user.name = name
  user.age = age
  user.email = email
  user.pet = pet

  user.save()

  res.redirect('/list')  

}

async function remove(req,res){

  const {id} = req.params

  
  const remove = await CustomersModel.deleteOne({_id: id})

  if(remove.deletedCount == 1){
    res.redirect('/list')
  }

}



module.exports = {
  add,
  index,
  listUsers,
  formEdit,
  edit,
  remove
}