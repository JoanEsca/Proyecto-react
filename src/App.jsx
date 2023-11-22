import ItemLisContainer from './componentes/ItemListContainer/ItemLisContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import NavBar from './componentes/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CarritoProvider} from './context/CarritoContext'
import Cart from './componentes/Cart/Cart'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
    <NavBar/>
    <Routes>
    <Route path='/' element={ <ItemLisContainer/> }/>
    <Route path='/category/:idCategory' element={ <ItemLisContainer/> }/>
    <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
    <Route path='/cart' element={<Cart/>} />
    <Route path='*' element={<h2>error 444 </h2>} />
    </Routes>
    </CarritoProvider>
    </BrowserRouter>
    </>

  )
}

export default App