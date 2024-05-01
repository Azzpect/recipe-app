import './css/main.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Recipes from './components/Recipes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateIcon from './components/CreateIcon';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <CreateIcon/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/all-recipes' element={<Recipes/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
