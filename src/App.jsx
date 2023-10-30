import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import PokemonDetail from './pages/PokemonDetail';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {

  return (

    <div className="App">
       
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </HashRouter>

    </div>
  )

}

export default App;