import React, { useState, useEffect } from 'react'
import { artigosBody } from '../config/data'
import '../Style/css/Artigos.css'
import Modal from './Modal'

interface NewLayer{
    id: number,
    title: string,
    img: string,
    sumary: string,
    font: string
};

const Artigos = () => {
    const [ selectLayer, setLayer ] = useState< NewLayer | null >(null);

    const newLayer = (layer: NewLayer) => {
        setLayer(layer)
    }

    const  closeModal = (() => {
        setLayer(null)
    })


  return (
    <div className='background'>
        <div onClick={() => newLayer(artigosBody[0])} className='layerPrincipal'>
            <img src={ artigosBody[0].img } alt="" />
            <h1>{ artigosBody[0].title }</h1>
            <p>{ artigosBody[0].sumary }</p>
            <div className='divFonte'>
                <p className='fonte'>{ artigosBody[0].font }</p>
                <div className='pogressLayesPrincipal'></div>
            </div>
        </div>
        <div className='gridLayers'>
            <div onClick={() => newLayer(artigosBody[1])} className='layerNBA'>
                <img src={ artigosBody[1].img } alt="" />
                <h1>{ artigosBody[1].title }</h1>
                <div className='divFonte'>
                    <p>{ artigosBody[1].font }</p>
                    <div className='pogressNBA'></div>
                </div>
            </div>
            <div onClick={() => newLayer(artigosBody[2])} className='layerWhats'>
                <img src={ artigosBody[2].img } alt="" />
                <h1>{ artigosBody[2].title }</h1>
                <div className='divFonte'>
                    <p>{ artigosBody[2].font }</p>
                    <div className='pogressWhats'></div>
                </div>
            </div>
        </div>
        { selectLayer && <Modal news={selectLayer}  onClose={closeModal}/>}
    </div>
  )
}

export default Artigos