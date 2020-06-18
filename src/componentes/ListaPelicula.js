import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Peliculas} from "./Pelicula"

export class ListaPeliculas extends Component{
    static propTypes ={
        movies:PropTypes.array
  }
  render(){
    const {movies}=this.props
    
    return (
        <div className="pelicula">
        {
        movies.map(movie=>{
        return (
        <div key={movie.imdbID} className="pelicula-item">
            <Peliculas 
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster} 
                />
        </div>
        )
        })
    }
    </div>
    )
  }
}