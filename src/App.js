import React from 'react'
import TarjetaFruta from './componentes/TarjetaFruta'
const App = () => (
  <div>
    <TarjetaFruta name = {'Sandia'} price = {5.00} />
    <TarjetaFruta name = {'Naranja'} price = {1.50} />
    <TarjetaFruta name = 'Kiwi' price = {3.00} />
  </div>
)

/*
const App = () => (
  <div>
    <TarjetaFruta name = 'Sandia'  price = {2.00}/>
    <TarjetaFruta name = 'Naranja' price = {3.52}/>
    <TarjetaFruta name = 'Kiwi' price = {5.55}/>
  </div>
)
*/

export default App
