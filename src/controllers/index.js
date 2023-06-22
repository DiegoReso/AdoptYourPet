


function index(req,res){
  res.render('index',{
    title: 'Seu Pet esta esperando por você!'
  })
} 

module.exports ={
  index
}