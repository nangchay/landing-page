import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const ValueSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div id='value' className='w-[1620px] mx-auto h-[800px] bg-[#f8f4e3] relative overflow-hidden z-[33] mt-0 mb-0'>
            <div className='flex w-[660px] mx-auto flex-col gap-[12px] items-center flex-nowrap relative z-[53] mt-[54px] mb-0'>
                <div className="w-[660px] self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[48px] font-normal leading-[60.609px] relative text-center whitespace-nowrap z-[54]">
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
            <div className='flex w-[1280px] mx-auto gap-[12px] items-center flex-nowrap relative z-[34] mt-[62px] mb-0'>

                <div className='flex flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap relative'>
                    <div className={`w-[325px] h-[400px] shrink-0 bg-[url(../assets/images/88ea845f18475251b66d52c02c009810d5971c72.png)] bg-cover bg-no-repeat rounded-[8px] relative`} />
                    <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                        Dầu dừa ép lạnh 100ml
                    </span>
                    <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                        Cold-Pressed Virgin Coconut Oil 100ml
                    </span>
                    <div className='flex w-[100px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#323232] relative pointer'>
                        <span className="flex w-[56px] h-[20px] justify-center items-center shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#6b8439] relative text-center whitespace-nowrap">
                            90,000đ
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap relative'>
                    <div className={`w-[325px] h-[400px] shrink-0 bg-[url(../assets/images/66ef8c654575e0c0c2e19117bab59a3dc8ad0562.png)] bg-cover bg-no-repeat rounded-[8px] relative`} />
                    <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                        Dầu dừa ép lạnh 350ml
                    </span>
                    <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                        Cold-Pressed Virgin Coconut Oil 350ml
                    </span>
                    <div className='flex w-[100px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#323232] relative pointer'>
                        <span className="flex w-[56px] h-[20px] justify-center items-center shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#6b8439] relative text-center whitespace-nowrap">
                            220,000đ
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap relative'>
                    <div className={`w-[325px] h-[400px] shrink-0 bg-[url(../assets/images/259e488b2cfaea471855888ed4a921693634ec68.png)] bg-cover bg-no-repeat rounded-[8px] relative`} />
                    <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                        Dầu dừa dưỡng mi
                    </span>
                    <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                        Eyelash Virgin Coconut Oil
                    </span>
                    <button onClick={openModal} className='flex w-[100px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#323232] relative pointer'>
                        <span className="flex w-[56px] h-[20px] justify-center items-center shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#6b8439] relative text-center whitespace-nowrap">
                            Liên hệ
                        </span>
                    </button>

                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>
        </div>
    );
};

export default ValueSection;
