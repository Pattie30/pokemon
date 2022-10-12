const React = require('react');
const pokemon = require('./models/pokemon');


class Edit extends React.Component {
    render(){
        console.log('from edit page', this.props.pokemmon);
        return(
            <div>
                <h1>
                     Edit Page
                </h1>
<form action={`/pokemon/${pokemon._id}?_method=put`} method='post'>
    Name: <input type='text' name='name' defaultValue={pokemon.name} />

     <br/>
    Image: <input type='img' name='color' detaultValue={pokemon.img} />

     
    Favorite Pokemon:{pokemmon.favoritePokemon ? <input type='checkbox' 
    name='favoritePokemon' defaultChecked/> :<input type='checkbox'
    name='favoritePokemon'/>}
   
    <input type='submit' value='Update Pokemon' />

</form>

            </div>
        )
    }
}