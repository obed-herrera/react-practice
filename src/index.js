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

    this.state = {
      cantidad: 0
    }
  }

  render (){
    return(
      <div>
        <h3>{ this.props.name }</h3>
        <hr/>
        <div>Cantidad: 0</div>
        <button> Agregar </button>
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
