const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {
        type: Boolean,
        required: true
    },
    FavoritePokemon: Boolean
})
//^Create a new model with the schema
const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports= Pokemon