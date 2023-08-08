import React, { FC } from 'react';
import '../Style/css/Modal.css'

interface News {
    id: number,
    title: string,
    sumary: string,
    img: string,
    font: string
}

interface NewsModalProps {
  news: News; // Certifique-se de definir a interface News de acordo com sua estrutura
  onClose: () => void;
}

const Modal: FC<NewsModalProps> = ({ news, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#2b2727"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#ffffff"></path> </g></svg>
        </button>
        <div className='modal-layer'>
            <img src={news.img} alt="Imagem da noticia" />
            <h1>{news.title}</h1>
            <div>
                <p>{news.sumary}</p>
                <p className='modal-font'>{news.font}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;