import React from 'react'
import ReactDOM from 'react-dom'
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
/*
const App = () => (
  <div>
    <TarjetaFruta name = 'Sandia'  price = {2.00}/>
    <TarjetaFruta name = 'Naranja' price = {3.52}/>
    <TarjetaFruta name = 'Kiwi' price = {5.55}/>
  </div>
)
*/

class TarjetaFruta extends React.Component{
  constructor(){
    super()

    /*this.agregar = this.agregar.bind(this)
    this.quitar = this.quitar.bind(this)*/

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
    return(
      <div>
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

const App = () => (
  <div>
    <TarjetaFruta name = {'Sandia'} price = {5.00} />
    <TarjetaFruta name = {'Naranja'} price = {1.50} />
    <TarjetaFruta name = 'Kiwi' price = {3.00} />
  </div>
)

ReactDOM.render(<App />,document.getElementById('root'))
