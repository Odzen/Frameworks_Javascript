import React, { Component } from 'react'
import MensajeEstatico from './MensajeEstatico'

class Peliculas extends Component {
  render() {
    return (
      <div id="Peliculas">
        <h4>Soy el componente Peliculas</h4>
        <MensajeEstatico />
      </div>
    )
  }
}

export default Peliculas
