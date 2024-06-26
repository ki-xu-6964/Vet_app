

const mongoose=require('mongoose')

const express = require('express')
const router = express.Router()
const pwd = process.env.Password

mongoose.connect(`mongodb+srv://test_user:beeboobop@atlascluster.skjqczz.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`)

const Pets= require('./model/pets')
const bodyParser = require("body-parser")
const cors = require("cors")




const app = express()



app.use(cors({
  origin: ['https://vet-app-4efh.vercel.app'],
  methods: ["POST", "PATCH", "GET", "DELETE"],
  credentials: true
}))



const port = 3000
app.listen(port)
router.use(bodyParser.urlencoded({ extended: false}))
router.use(bodyParser.json())

app.use(express.json())

app.use('/test', router)

//app.use(express.static('uploads'))

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳  merugh')
})



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // You can also add other CORS headers here
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/', async (req, res) => {
  const newPettie = new Pets({ 
    name: req.body.name,
    age: req.body.age,
    breed: req.body.breed,
    
  })

  try {
  
    const finalPettie = await newPettie.save()
    res.status(201).json(finalPettie)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

app.get('/home', async (req, res) => {
  const pets= await Pets.find()
  res.send(pets)

})

app.get('/:id', async (req, res) => {
    try{
    const pets= await Pets.findOne({_id : req.params.id})
    res.send(pets)
    } catch{
        res.status(404)
        res.send({error: "ID non existent"})
    }
})




router.post('/', async (req, res) => {
    const newPettie = new Pets({ 
      name: req.body.name,
      age: req.body.age,
      breed: req.body.breed,
      
    })

    try {
    
      const finalPettie = await newPettie.save()
      res.status(201).json(finalPettie)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
  
  

  app.delete('/:id', async (req, res) => {
    try{
    await Pets.deleteOne({_id: req.params.id})
    res.status(204)
    res.send("done")
   

    } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" })
    }
  })

  
app.patch('/:id', async (req, res) => {
    try{
      const filter = { _id : req.params.id}
      const update = {age: req.body.age, breed: req.body.breed, name: req.body.name}

      let doc = await Pets.findOneAndUpdate(filter, update, {
      });
        await doc.save();
        doc= await Pets.findOne( { _id : req.params.id})
          res.send(doc).status(200)
    }
    catch(error){
      res.status(400).json({ message: error.message })
    }
})




console.log('ehlllooo')
module.exports = app

