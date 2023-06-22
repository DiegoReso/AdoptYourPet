const express = require('express')
const path = require('path')
const db = require('./database')
const routes = require('./routes')


const app = express()

db.connect()


//definindo template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


const publicFolder = path.join(__dirname, 'public')
const expressPublic = express.static(publicFolder)
app.use(expressPublic)


app.use(express.urlencoded({extended:true}))


app.use('/', routes)



//404 error not found
app.use((req,res) =>{
  res.send('Pagina nao encontrada!')
})


const port  = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Server is listen on port ${port}`))