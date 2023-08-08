import React from 'react';
import assinatura from '../assets/img/logo_assinatura.png'
import '../Style/css/Footer.css'

const Footer = () => {
  return (
    <div className='backgroundFooter'>
        <div className='divAssinatura'>
            <img src={ assinatura } alt="Assinatura Digital" />
        </div>
        <div className='divCopyright'>
            <p>Copyright ® Mandarin. Todos os direitos reservados.<br></br>
            Caso não deseje mais receber nossos e-mails, por favor <span>clique aqui.</span></p>
        </div>
    </div>
  )
}

export default Footer