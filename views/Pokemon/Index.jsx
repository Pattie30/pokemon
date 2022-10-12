const React= require('react')
//const pokemon = require('/models/pokemon.js')


const style = {
    color: '#fff',
    backgroundColor: '#000',
}
class Index extends React.Component{
    render(){
        const{pokemon} = this.props
        return(
            <div style={style.container} className='container'>
                <h1 style= {style.header}>Pokemon</h1>
                <a style={style.createPokemonBtn} href= '/pokemon/New'>Create Rare Pokemon</a>
                 <ul>
               {/* {pokemon.map((pokemon, idx) => (
                  
                  
                  <li><a href={`pokemon/${idx}`}>{capitalizeFirstLetter(pokemon.name)}</a>{" "}<img src={pokemon.img} /></li>
                  
                  
                  
               

               ))} 
                */}
               
                </ul> 
               
            </div>
        )
    }
}

const capitalizeFirstLetter = (string) => {
    return string.chartAt(0).toUpperCase() + string.slice(1)
}

module.exports= Index