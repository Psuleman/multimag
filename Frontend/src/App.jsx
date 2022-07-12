import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './component/Layout/Navbar'
import Home from './pages/Home'
import Skus from './pages/Skus'
import Referencement from './pages/Referencement'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ExportFile from './pages/ExportFile';
import ListesProduits from './pages/ListesProduits';
import ListesAttentes from './pages/ListesAttentes';
import Test from './pages/Test';
import Produits from './pages/Produits';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skus" element={<Skus />} />
          <Route path="/export-file" element={<ExportFile />} />
          <Route path="/liste-produit" element={<ListesProduits />} />
          <Route path="/produit-en-attente" element={<ListesAttentes />} />
          <Route path="/produits-multimag" element={<Produits />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
