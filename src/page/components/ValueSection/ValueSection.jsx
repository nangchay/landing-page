import React, { useState } from 'react';
import Modal from 'react-modal';

const ValueSection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        console.log("hello");
        setSelectedProduct(product);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const products = [
        {
            id: 1,
            name: "Dầu dừa ép lạnh 100ml",
            engName: "Cold-Pressed Virgin Coconut Oil 100ml",
            image: "../assets/images/88ea845f18475251b66d52c02c009810d5971c72.png",
            contactText: "90,000đ",
        },
        {
            id: 2,
            name: "Dầu dừa ép lạnh 350ml",
            engName: "Cold-Pressed Virgin Coconut Oil 350ml",
            image: "../assets/images/66ef8c654575e0c0c2e19117bab59a3dc8ad0562.png",
            contactText: "220,000đ",
        },
        {
            id: 3,
            name: "Dầu dừa dưỡng mi",
            engName: "Eyelash Virgin Coconut Oil 100ml",
            image: "../assets/images/259e488b2cfaea471855888ed4a921693634ec68.png",
            contactText: "Liên hệ",
        },
    ];

    return (
        <div id='value' className='w-[1280px] h-[800px] bg-[#f8f4e3] relative overflow-hidden z-[33] mt-0 mr-0 mb-0 ml-0'>
            <div className='flex w-[659.556px] flex-col gap-[12px] items-center flex-nowrap relative z-[53] mt-[54px] mr-0 mb-0 ml-[310.222px]'>
                <div className="w-[659.556px] self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[48px] font-normal leading-[60.609px] relative text-center whitespace-nowrap z-[54]">
                    <span className="font-['SVN-Averia_Serif_Libre'] text-[48px] font-light leading-[60.609px] text-[#707070] relative text-center">
                        <em>SELL </em>
                    </span>
                    <span className="font-['SVN-Averia_Serif_Libre'] text-[48px] font-normal leading-[60.609px] text-[#6b8439] relative text-center">

                        value
                    </span>
                    <span className="font-['SVN-Averia_Serif_Libre'] text-[48px] font-normal leading-[60.609px] text-[#707070] relative text-center">
                        <em> NOT </em>
                    </span>
                    <span className="font-['SVN-Averia_Serif_Libre'] text-[48px] font-normal leading-[60.609px] text-[#6b8439] relative text-center">

                        product
                    </span>
                </div>
                <span className="flex w-[659.556px] h-[39px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-normal leading-[25.254px] text-[#323232] relative text-center z-[55]">
                    Chúng tôi bán câu chuyện, bạn có sẵn sàng nghe?
                </span>
            </div>
            <div className='flex w-[1120px] gap-[12px] items-center flex-nowrap relative z-[34] mt-[62px] mr-0 mb-0 ml-[80px]'>
                {
                    products.map((product) => (
                        <div key={product.id} className='flex flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap relative'>
                            <div className={`w-[325px] h-[400px] shrink-0 bg-[url(${product.image})] bg-cover bg-no-repeat rounded-[8px] relative`} />
                            <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                                {product.name}
                            </span>
                            <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                                {product.engName}
                            </span>
                            <div className='flex w-[100px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#323232] relative pointer'>
                                <span className="flex w-[56px] h-[20px] justify-center items-center shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#6b8439] relative text-center whitespace-nowrap">
                                    {product.contactText}
                                </span>
                            </div>
                        </div>
                    ))}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className='Modal'
                overlayClassName='Overlay'
                contentLabel='Example Modal'
            >
                <h2>Chọn kênh liên hệ cho sản phẩm "{selectedProduct && selectedProduct.name}"</h2>
                <div>
                    <button onClick={closeModal}>Đóng</button>
                    <a href='https://www.facebook.com/nangchayvn' target='_blank' rel='noopener noreferrer'>Fanpage Facebook</a>
                    <a href='https://www.instagram.com/nangchayvn' target='_blank' rel='noopener noreferrer'>Fanpage Instagram</a>
                </div>
            </Modal>
        </div>
    );
};

export default ValueSection;
