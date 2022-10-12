const React = require('react')

class New extends React.Component {
    render(){
        return(
            <div>
                <h1>NEW POKEMON</h1>
                <form action= '/pokemon' method='POST'>
                    Name: <input type= 'text' name= 'name' /><br/>
                    <br/>
                    Color: <input type= 'text' name='color' />
                    <br/>
                    <br/>
                    Favorite: <input type='checkbox' name='Favorite Pokemon' />
                    <br/>
                    <br/>
                    <input type='submit' value='pokemon' />
                </form>
            </div>
        
        
        )
    }
}

module.exports = New