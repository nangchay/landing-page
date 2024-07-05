import React from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaFacebookMessenger, FaInstagram } from 'react-icons/fa';

const Modal = ({ isOpen, onClose }) => {
    const closeModal = () => {
        onClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    };

    return isOpen
        ? createPortal(
            <div className='fixed inset-0 flex items-center justify-center z-[9999]'>
                <div className='fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 flex justify-center items-center modal-overlay' onClick={handleOverlayClick}>
                    <div className='bg-white p-8 rounded-lg relative'>
                        <button
                            onClick={closeModal}
                            className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
                        >
                            <FaTimes />
                        </button>
                        <h2 className='text-xl font-bold mb-4'>Chọn kênh liên hệ cho sản phẩm</h2>
                        <div className='mt-4 flex justify-center'>
                            <a
                                href='https://m.me/304495036083609'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-[36px] h-[36px] inline-block transform transition-transform duration-300 hover:translate-y-2 mx-2'
                            >
                                <div className='w-[36px] h-[36px] relative overflow-hidden'>
                                    <FaFacebookMessenger size={36} color='#3b5998' />
                                </div>
                            </a>
                            <a
                                href='https://www.instagram.com/nangchayvn'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-[36px] h-[36px] inline-block transform transition-transform duration-300 hover:translate-y-2 mx-2'
                            >
                                <div className='w-[36px] h-[36px] relative overflow-hidden'>
                                    <FaInstagram size={36} color='#c13584' />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>,
            document.body
        )
        : null;
};

export default Modal;
