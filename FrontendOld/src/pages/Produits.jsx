import '../assets/scss/ProduitPim.scss'
import Marque from "../component/Skus/Marque"
import Univers from "../component/Skus/Univers"
import Categorie from "../component/Skus/Categorie"
import {PimContext} from '../component/Skus/Context/PimContext'
import { useState, useEffect } from 'react'

const Produits = () => {
    const [produitList, setProduitList] = useState()

    const [univers, setUnivers] = useState()
    const [universFiltre, setUniversFiltre] = useState()
    const [categorie, setCategorie] = useState()
    const [categorieFiltre, setCategorieFiltre] = useState()

    const [marque, setMarque] = useState(false)
    const [marqueFiltre, setMarqueFiltre] = useState()

    const [search, setSearch] = useState("")
    const [annuler, setAnnuler] = useState(false)
    const [produitExist, setProduitExist] = useState(true)



    return (
        <div>
            <PimContext.Provider
            value={{
                produitList : produitList,
                setProduitList : setProduitList,

                univers : univers,
                categorie : categorie,
                marque : marque,

                categorieFiltre : categorieFiltre,
                setCategorieFiltre : setCategorieFiltre,

                universFiltre : universFiltre,
                setUniversFiltre : setUniversFiltre,

                marqueFiltre : marqueFiltre,
                setMarqueFiltre : setMarqueFiltre,

                search: search,
                setSearch: setSearch,

                annuler: annuler,
                setAnnuler: setAnnuler,
                setProduitExist : setProduitExist,
                produitExist : produitExist,
            }}
            >
                <h2>Listes de tous les produits</h2>
                <section className="filtre-pim">
                    <div><button>Mettre à jour</button></div>
                    <div><button>+ Nouveau produit</button></div>
                    <div><input type="search" placeholder="Rechercher un produit"/><button>Rechercher</button></div>
                </section>
                <section className="filtre-pim">
                    <div><h3>FILTRE</h3></div>
                    <div><Marque/></div>
                    <div><Univers/></div>
                    <div><Categorie/></div>
                    <div><input type="checkbox" /><label>Prix avec remise</label></div>
                </section>
                <table className="listSkus">
                    <thead>
                        <tr>
                            <th rowSpan="2">SKU</th>
                            <th rowSpan="2">AJOUTE LE</th>
                            <th rowSpan="2">RECU LE</th>
                            <th rowSpan="2">PICTURES</th>
                            <th rowSpan="2">REFERENCE FOURNISSEUR</th>
                            <th rowSpan="2">NOM FOURNISSEUR</th>
                            <th rowSpan="2">MODELE</th>
                            <th rowSpan="2">REFERENCE COULEUR</th>
                            <th rowSpan="2">SAISON</th>
                            <th rowSpan="2">UNIVERS</th>
                            <th rowSpan="2">CATEGORIE</th>
                            <th rowSpan="2">SOUS CATEGORIE</th>
                            <th rowSpan="2">FILTRE</th>
                            <th rowSpan="2">MODE ACQUISITION</th>
                            <th rowSpan="2">TAILLE</th>
                            <th colSpan="7">STOCK</th>
                        </tr>
                        <tr>
                            <th>BOISSY</th>
                            <th>SEVIGNE</th>
                            <th>HEROLD</th>
                            <th>CHENEVIERE</th>
                            <th>REFERENCE</th>
                            <th>FARFETCH</th>
                            <th>TOTAL STOCK</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>                
            </PimContext.Provider>

        </div>
    )
}

export default Produits