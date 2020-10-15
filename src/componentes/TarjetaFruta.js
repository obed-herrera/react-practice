import React from 'react'
//import './TarjetaFruta.css'
import styles from './TarjetaFruta.module.css'



class TarjetaFruta extends React.Component{
  constructor(){
    super()

    /*this.agregar = this.agregar.bind(this)
    this.quitar = this.quitar.bind(this)*/

    /*Usando metodos para declarar constantes*/
    const METHODS = [
      'agregar',
      'quitar',
      'limpiar'
    ]

    METHODS.forEach((method) => {
      this[method] = this[method].bind(this)
    });

    this.state = {
      cantidad: 0
    }
  }

agregar (){
  this.setState({
    cantidad: this.state.cantidad + 1
  })
}

quitar (){
  this.setState({
    cantidad: this.state.cantidad - 1
  })
}

limpiar (){
  this.setState({
    cantidad: 0
  })
}

  render (){

    const hasItems = this.state.cantidad > 0
    const activeClass = hasItems ? styles['card-active'] : ''
    const clases = /*hasItems ? 'TarjetaFruta-activa' : 'TarjetaFruta'*/ /*`card ${activeClass}`*/ styles.card + ' ' + activeClass

    return(
      <div className = {clases}>
        <h3>{ this.props.name }</h3>
        <hr/>
        <div>Cantidad: {this.state.cantidad}</div>
        <button

          /*onClick={() =>{
            /*this.state.cantidad = 100
            this.forceUpdate()
            this.setState({cantidad: this.state.cantidad + 1*/
          /*Arrow Function*/
          /*this.setState({cantidad: this.state.cantidad + 1})
        }}*/
          onClick = {this.agregar}
        >
          +
        </button>
        <button

          /*onClick={() =>{
            /*this.state.cantidad = 100
            this.forceUpdate()
            this.setState({cantidad: this.state.cantidad + 1*/
          /*Arrow Function*/
          /*this.setState({cantidad: this.state.cantidad + 1})
        }}*/
          onClick = {this.quitar}
        >
          -
        </button>
        <button

          /*onClick={() =>{
            /*this.state.cantidad = 100
            this.forceUpdate()
            this.setState({cantidad: this.state.cantidad + 1*/
          /*Arrow Function*/
          /*this.setState({cantidad: this.state.cantidad + 1})
        }}*/
          onClick = {this.limpiar}
        >
          Limpiar
        </button>
        <p>${this.props.price}</p>
        <p>
          Total: ${ this.props.price * this.state.cantidad }
        </p>
      </div>
    )
  }
}

/*
const TarjetaFruta = (props) =>{
  console.log(props)
  return(<div>
    <h3>{props.name} </h3>
    <hr/>
    <p>$ { props.price }</p>
  </div>)
}
*/

export default TarjetaFruta
