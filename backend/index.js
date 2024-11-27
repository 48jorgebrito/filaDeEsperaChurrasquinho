const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Fila = require('./models/Fila')
const cors = require('cors')

 app.use(cors())
 app.use(express.json())
 app.post('/', async (req, res)=>{
    
    try{
        const { cliente, descricao } = req.body
        await Fila.create({
            
            cliente,
            descricao
        }) 
        return(
        
            res.status(200).json({message: 'O cliente foi adiocionado na fila de espera'})
        )
    }
    catch(error){
        console.log(error)
        res.status(500).json({error : error})
    }
})

app.get('/', async (req, res) => {
    const lista = await Fila.find()
    res.status(201).json(lista)
})
app.get('/cliente', async (req, res)=>{
    const cliente = await Fila.findOne()
    res.status(201).json(cliente)
})

app.delete('/cliente', async (req, res)=>{
    const cliente = await Fila.deleteOne()
    res.status(201).json(cliente)

})




mongoose.connect('mongodb://127.0.0.1:27017/fila-de-espra').then(()=>{
    app.listen(8080)
    console.log('server conectado')
}).catch((error)=>{
    console.log(error)
})