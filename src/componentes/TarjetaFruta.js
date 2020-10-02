import React from 'react'

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

    const styles = {
      border: '1px solid black',
      marginBottom: '1em',
      borderRadius: '0.50em',
      padding: '1em',
      background: this.state.cantidad > 0 ? 'green' : '#FFF'
    }
    return(
      <div style = {styles}>
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
