import React, { useEffect, useRef } from 'react';
import AOS from 'aos';

const Value = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -325, // Độ rộng của mỗi sản phẩm
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 325, // Độ rộng của mỗi sản phẩm
                behavior: 'smooth',
            });
        }
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

            <div className="relative flex items-center justify-between mt-[62px]">
                {/* Nút điều hướng trái */}
                <button
                    className="absolute left-[60px] top-1/2 transform -translate-y-1/2 bg-[#6b8439] text-white p-2 rounded-full shadow-lg z-[100]"
                    onClick={scrollLeft}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Nút điều hướng phải */}
                <button
                    className="absolute right-[60px] top-1/2 transform -translate-y-1/2 bg-[#6b8439] text-white p-2 rounded-full shadow-lg z-[100]"
                    onClick={scrollRight}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div ref={scrollRef} data-aos="fade-in" className="overflow-x-auto scroll-smooth flex w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-[12px] items-center flex-nowrap relative mt-[62px] mb-0 z-[46]">

                    <div className="flex flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap relative mb-4 z-[47]">
                        <div className="w-[325px] h-[400px] shrink-0 bg-[url('https://res.cloudinary.com/nangchay/image/upload/v1720423404/nangchay/oil100.png')] bg-cover bg-no-repeat rounded-[8px] hover:border-2 hover:border-[#b77f5d] transition-all duration-1000 ease-in-out relative z-[48]" />
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
                        <div className="w-[325px] h-[400px] shrink-0 bg-[url('https://res.cloudinary.com/nangchay/image/upload/v1720423404/nangchay/oil350.png')] bg-cover bg-no-repeat rounded-[8px] hover:border-2 hover:border-[#b77f5d] transition-all duration-1000 ease-in-out relative" />
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
                        <div className="w-[325px] h-[400px] shrink-0 bg-[url('https://res.cloudinary.com/nangchay/image/upload/v1726118877/nangchay/mascara.jpg')] bg-cover bg-no-repeat rounded-[8px] hover:border-2 hover:border-[#b77f5d] transition-all duration-1000 ease-in-out relative" />
                        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                            Dầu dừa dưỡng mi
                        </span>
                        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                            Eyelash Virgin Coconut Oil
                        </span>
                        <div className="flex w-[100px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] hover:bg-slate-100 rounded-[8px] border-solid border border-[#323232] relative pointer">
                            <span className="flex w-[56px] h-[20px] justify-center items-center shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#6b8439] relative text-center whitespace-nowrap z-[64]">
                                39,000đ
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap relative mb-4 -z[65]">
                        <div className="w-[325px] h-[400px] shrink-0 bg-[url('https://res.cloudinary.com/nangchay/image/upload/v1726118809/nangchay/lippalm.jpg')] bg-cover bg-no-repeat rounded-[8px] hover:border-2 hover:border-[#b77f5d] transition-all duration-1000 ease-in-out relative" />
                        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                            Son dưỡng dầu dừa
                        </span>
                        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#707070] relative text-center whitespace-nowrap">
                            Coconut Oil Lip Palm
                        </span>
                        <div className="flex w-[100px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] hover:bg-slate-100 rounded-[8px] border-solid border border-[#323232] relative pointer">
                            <span className="flex w-[56px] h-[20px] justify-center items-center shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[16px] font-bold leading-[20px] text-[#6b8439] relative text-center whitespace-nowrap z-[70]">
                                59,000đ
                            </span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Value;
