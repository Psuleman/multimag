import { useContext, useEffect, useState } from 'react'
import {ReferencementContext} from '../Context/ReferencementContext'

const Images = () => {

    const {produit} = useContext(ReferencementContext)
    const [tabImage, setTabImage] = useState()

    useEffect(()=>{
        let stringImg = produit.pictures
        let tab = stringImg.split(';')
        setTabImage(tab)
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
            </div>


        </div>
    )
}

export default Images
