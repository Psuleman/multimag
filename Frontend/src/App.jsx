import { useState } from 'react'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inscription from './pages/Inscription'
import Connexion from './pages/Connexion'
import ResetPassword from './pages/ResetPassword'
import MonCompte from './pages/MonCompte'
import ListeProduit from './pages/ListeProduit'
import ReferencementProduit from './pages/ReferencementProduit'
import Export from './pages/Export'
import ProduitAModifier from './pages/ProduitAModifier'
import NouveauProduit from './pages/NouveauProduit'
import FormulaireProduit from './pages/FormulaireProduit'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/reinitialisation-motdepasse" element={<ResetPassword />} />
          <Route path="/mon-compte" element={<MonCompte />} />
          <Route path="/liste-produit" element={<ListeProduit />} />
          <Route path="/produit-a-modifier" element={<ProduitAModifier />} />
          <Route path="/referencement-produit" element={<ReferencementProduit />} />
          <Route path="/export" element={<Export />} />
          <Route path="/nouveau-produit" element={<NouveauProduit />} />
          <Route path="/formulaire-produit/:sku" element={<FormulaireProduit />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
