import { useContext, useEffect, useState } from 'react'
import {ProduitContext} from '../Context/ProduitContext'

const Images = () => {

    const {produit} = useContext(ProduitContext)
    const [tabImage, setTabImage] = useState()
    const [video, setVideo] = useState()

    useEffect(()=>{
        let stringImg = produit.pictures
        let tab = stringImg.split(';')
        let video = tab[tab.length-1]
        setTabImage(tab)
        setVideo(video)
    }, [])


    return (
        <div>
            <h3>Images du produit</h3>
            <div className='imgContent'>
                {tabImage &&
                    tabImage.map((item)=>(
                        <div className='imgList'>
                            <img src={item} alt="" />
                        </div>
                    ))
                }

                {
                    tabImage &&
                    <video controls width="260">
                        <source src={video} type="video/mp4"/>
                    </video>

                }
            </div>


        </div>
    )
}

export default Images
