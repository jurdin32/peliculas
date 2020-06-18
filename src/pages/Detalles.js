import React, {Component} from "react"
import PropTypes from "prop-types"

const API_KEY= "17cfaa3f"
export class Detalle extends Component{
    static propTypes={
        id:PropTypes.string

    }

    _fechMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie=>{
            console.log(movie)
            
        })
    }

    componentDidMount(){
        const {id}= this.props
        this._fechMovie({id})
    }
    render(){
        return(
            <p>Pagina de detalle</p>
        )
    }
}