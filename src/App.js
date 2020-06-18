import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {Titulo} from "./componentes/Titulo"
import {Buscador} from "./componentes/BuscadorForm"
import { ListaPeliculas } from './componentes/ListaPelicula';
import{Detalle} from "./pages/Detalles"



class App extends Component{
  state={
    results:[],
    usobuscar:false
  }

  _onResults = (results)=>{
    this.setState({results})
  }

  render(){
    const url=new URL(document.location)
    const hasId=url.searchParams.has('id')
    if (hasId){
      return <Detalle id={url.searchParams.get("id")}/>
    }
  return (
    <div className="App">
      <Titulo>Buscador de peliculas</Titulo>
      <div className="search">
        <Buscador onResult={this._onResults}></Buscador>
      </div>
      {this.state.results.length>0?
      <ListaPeliculas movies={this.state.results}/>
      :<p></p>}
    </div>
  );
  }
}

export default App;
