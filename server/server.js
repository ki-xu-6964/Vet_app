const mongoose=require('mongoose')

const express = require('express')
const router = express.Router()

//var password = encodeURIComponent("Es#lq2jPko2JDgBn")
mongoose.connect("mongodb+srv://test_user:test123@cluster0.8s3rokp.mongodb.net/")
const Pets= require('./model/pets')
const bodyParser = require("body-parser")
//const cors = require("cors")
const cors = require('cors')



const app = express()
/*
app.use(cors({
  origin: ['https://vet-app-coral.vercel.app'],
  methods: ["POST", "PATCH", "GET", "DELETE"],
  credentials: true
}))
*/
const port = 3000
app.listen(port)
router.use(bodyParser.urlencoded({ extended: false}))
router.use(bodyParser.json())

//app.use(cors());
app.use(express.json())

//app.use('/test', router)

//app.use(express.static('uploads'))

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

router.get('/home', async (req, res) => {
  const pets= await Pets.find()
  res.send(pets)

})



router.get('/:id', async (req, res) => {
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
  
  

  router.delete('/:id', async (req, res) => {
    try{
    await Pets.deleteOne({_id: req.params.id})
    res.status(204)
    res.send("done")
   

    } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" })
    }
  })

  
router.patch('/:id', async (req, res) => {
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


//https://rahmanfadhil.com/express-rest-api/