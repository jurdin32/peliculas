import React, {Component} from 'react'

const API_KEY= "17cfaa3f"
export class Buscador extends Component{
    estate={
        texto:''
    }

    _handleChange =(e) =>{
        this.setState({texto: e.target.value})
    }

    _handleOnSubmit = (e) =>{
        e.preventDefault()
        const { texto } = this.state
        console.log(texto)
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${texto}`)
        .then(res => res.json())
        .then(results=>{
            console.log(results)
            const {Search=[], totalResults="0"} =results
            this.props.onResult(Search)
        })
    }

    render(){
        return(
            <form  onSubmit={this._handleOnSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            onChange={this._handleChange}
                            placeholder="Buscar..."/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Buscar
                        </button>    
                    </div>
                </div>
            </form>
        )
    }
    
}