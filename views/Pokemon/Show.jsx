const React = require('react');
const pokemon = require('../models/pokemon')


class Show extends React.Component{
    render(){
    
        //^ Receive data from pokemon.js

        const pokemon = this.props.pokemon
        

        

        return( 
            <div style={{backgroundColor:'lightpink'}}>
        <h1> Pokemon Show Page </h1>
        <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
        
        <img src={pokemon.img} alt={capitalizeFirstLetter(pokemon.name)}/>
        <h4> {pokemon.favoritePokemon ? 'The Best Pokemon Ever' : 'Pokemon' }</h4>
        
        
        </div>
        )
    }
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

module.exports  = Show;