import Navbar from './componentes/NavBar/Navbar'
import ItemLisContainer from './componentes/ItemListContainer/ItemLisContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<ItemLisContainer/>}/>
    <Route path='/category/:idCategory' element={<ItemLisContainer/>}/>
    <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App