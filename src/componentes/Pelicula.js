import React, { Component } from 'react';
import propTypes from 'prop-types'

export class Peliculas extends Component{
    static propTypes={
        id:propTypes.string,
        title: propTypes.string,
        year: propTypes.string,
        poster:propTypes.string
    }
    render(){
        const{id, poster,title,year} = this.props
        return(
            <a  href={`?id=${id}`} className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={poster} alt={title}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{year}</p>
                        </div>
                    </div>
                </div>
            </a>
        )

    }
}