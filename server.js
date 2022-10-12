require('dotenv').config();


const express = require('express')
const morgan = require('morgan')
const pokemon = require('./models/pokemon')
const mongoose = require('mongoose');
const pokemonModelOne= require('./models/pokemonModelOne')
const Pokemon = require('./models/pokemonModelOne');

const app = express()
const PORT =3000

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
//app.use(methodOverride('_method'))
app.use((req,res,next) => {
    console.log('I run for all routes');
    next()
})


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon Adventure APP')
})
// app.get('/pokemon', (req, res) => {
//     Pokemon.find({}, (error, pokemonFromDB) => {
//         if(error)
//  {
//     console.log(error)
//  } 
//  console.log(pokemonFromDB); 
    
//       res.render('pokemon/Index', {pokemon: pokemonFromDB})
//     })
// });
app.get('/pokemon', (req,res) => {
    res.render('Index')
})



//^Take in the data from create new 

//     //fruits.push(req.body)
//    // res.redirect('/fruits')

app.get('/pokemon/:id', (req,res) =>{
    const {id} = req.params
    res.render('Show', {pokemon:pokemon[id]})
})
app.post('/pokemon', (req,res) => {
    if(req.body.favoritePokemon === 'on'){
        req.body.favoritePokemon  = true;
    } else{
        req.body.favoritePokemon  = false;
    }

Pokemon.create(req.body, (error, createdPokemon) =>{
    if(error) {
        console.log(error);
    }
    console.log(createdPokemon)
    res.redirect('/pokemon');
})

// Render
app.get(`/pokemon/New`, (req, res) =>{
    res.render('pokemon/New')
})

// Show Route: show a single fruit

//^add show route
app.get('/pokemon/:id', (req, res) => {
 //  console.log(req.params.indexOfFruitesArray)
 const {id} = req.params;


 Pokemon.findById(id, (error, foundPokemon) => {
 if(error){
    console.log(error);
    res.status(403).send('Id not found')
 }
 res.render('/pokemon/Show', {
  pokemon: foundPokemon,
 
})  
   
 
})
 
   // res.send(fruits[req.params.indexOfFruitsArray]);
});


app.get('/pokemon/:id/edit', (req, res) => {
    const {id} = req.params
    // find the fruit in the db using the id
    Pokemon.findById(id, (error, foundPokemon) => {
      if (error){
        console.log(error);
        res.status(403).send('Id not found')
      }
      // render the view and pass the data from the fruit
      res.render('/pokemon/Edit', {pokemon: foundPokemon})
  
    })
})

app.delete('/pokemon/:id', (req, res)=>{
    const {id} = req.params
    //console.log('deleting...')
    //res.send('deleting...');
    //^delete from db
    Pokemon.findByIdAndRemove(id, (error, data) => {
        console.log('HEREEEE', data);
         if(error){
            console.log(error)
            res.status(403).send('Bad request')
         }
         res.redirect('/pokemon')
    })
});

app.get('pokemon/:id/edit', (req, res) => {
    const {id} = req.params
    //^ find in the db using the id
  Pokemon.findById(id, (error, foundPokemon) => {
      console.log(foundPokemon)
      res.send('found')
  })
})

app.get("/pokemon/:id", (req, res) =>{
  const{id} = req.params
  res.render('Show',{pokemon:pokemon[id]})

  
    Pokemon.findByIdAndUpdate(id, req.body, (error, updatedPokemon) => {
      if (error){
        console.log(error);
        res.status(403).send('Cannot update')
      }
      res.redirect(`/pokemon/${id}`)
    })
})




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)




mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true,
});

});

mongoose.connection.once('open', () => {
   console.log('connected to mongo');
})













































































