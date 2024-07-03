import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import AOS from 'aos';

const Value = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div id='value' className='w-screen mx-auto bg-[#f8f4e3] relative overflow-hidden z-[33] mt-0 mb-0 py-8 md:py-16 z-[38]'>
            <div className='flex w-full mx-auto flex-col gap-[12px] items-center flex-nowrap relative z-[53] mt-0 mb-0 z-[39]'>
                <div data-aos="zoom-out" data-aos-duration="1500" className="w-full self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[32px] sm:text-[48px] font-normal leading-[60.609px] relative text-center whitespace-nowrap z-[40]">
                    <span className="font-['SVN-Averia_Serif_Libre'] font-light leading-[60.609px] text-[#707070] relative text-center">
                        <em>SELL </em>
                    </span>
                    <span className="font-['SVN-Averia_Serif_Libre'] font-normal leading-[60.609px] text-[#6b8439] relative text-center">

                        value
                    </span>
                    <span className="font-['SVN-Averia_Serif_Libre'] font-normal leading-[60.609px] text-[#707070] relative text-center">
                        <em> NOT </em>
                    </span>
                    <span className="font-['SVN-Averia_Serif_Libre'] font-normal leading-[60.609px] text-[#6b8439] relative text-center">

                        product
                    </span>
                </div>
                <span data-aos="zoom-in" className="flex w-full h-[38px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[18px] sm:text-[20px] font-normal leading-[25.254px] text-[#323232] relative text-center z-[45]">
                    Chúng tôi bán câu chuyện, bạn có sẵn sàng nghe?
                </span>
            </div>

            <div data-aos="fade-in" className="overflow-x-auto scroll-smooth flex w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-[12px] items-center flex-nowrap relative z-[34] mt-[62px] mb-0 z-[46]">

                <div className="flex flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap relative mb-4 z-[47]">
                    <div className="w-[325px] h-[400px] shrink-0 bg-[url('/src/assets/images/oil100.png')] bg-cover bg-no-repeat rounded-[8px] border-solid border-2 border-[#b77f5d] relative z-[48]" />
                    <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap z-[49]">
                        Dầu dừa ép lạnh 100ml
                    </span>
                    <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap z-[50]">
                        Cold-Pressed Virgin Coconut Oil 100ml
                    </span>
                    <div className="flex w-[100px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#323232] relative pointer z-[51]">
                        <span className="flex w-[56px] h-[20px] justify-center items-center shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#6b8439] relative text-center whitespace-nowrap z-[52]">
                            90,000đ
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap relative mb-4 z-[53]">
                    <div className="w-[325px] h-[400px] shrink-0 bg-[url('/src/assets/images/oil350.png')] bg-cover bg-no-repeat rounded-[8px] border-solid border-2 border-[#b77f5d] relative" />
                    <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                        Dầu dừa ép lạnh 350ml
                    </span>
                    <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                        Cold-Pressed Virgin Coconut Oil 350ml
                    </span>
                    <div className="flex w-[100px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#323232] relative pointer">
                        <span className="flex w-[56px] h-[20px] justify-center items-center shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#6b8439] relative text-center whitespace-nowrap">
                            220,000đ
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap relative mb-4 -z[59]">
                    <div className="w-[325px] h-[400px] shrink-0 bg-[url('/src/assets/images/oil10.png')] bg-cover bg-no-repeat rounded-[8px] border-solid border-2 border-[#b77f5d] relative" />
                    <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                        Dầu dừa dưỡng mi
                    </span>
                    <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                        Eyelash Virgin Coconut Oil
                    </span>
                    <button onClick={openModal} className="flex w-[100px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#323232] relative pointer">
                        <span className="flex w-[56px] h-[20px] justify-center items-center shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#6b8439] relative text-center whitespace-nowrap z-[64]">
                            Liên hệ
                        </span>
                    </button>
                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>


        </div>
    );
};

export default Value;
