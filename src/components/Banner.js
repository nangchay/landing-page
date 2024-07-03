import React from "react";

function Banner() {

    const smoothScroll = (e) => {
        e.preventDefault();
        const targetElement = document.getElementById('slogan');
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <div className="bg-[#fff] flex flex-col-reverse md:flex-row w-screen gap-0 items-center flex-nowrap relative z-[1] pb-8 pt-36">

            <div className='px-6 xl:px-48 flex w-full md:w-3/5 h-full flex-col gap-[12px] md:gap-[36px] justify-center place-items-center md:place-items-start relative z-[2]'>
                <span className="flex w-full justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[32px] md:text-[64px] font-normal text-[#323232] relative text-center md:text-left z-[3]">
                    <em>Gắn kết con người với thiên nhiên.</em>
                </span>
                <span className="flex w-full justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-light text-[#707070] relative text-center md:text-left z-[4]">
                    Đồng hành cùng Nàng Chay trong việc chăm sóc sức khỏe, dinh dưỡng
                    và tạo dựng một lối sống thuần chay.
                </span>
                <button className='flex w-[136px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#6b8439] rounded-[5px] border-none relative z-[5] pointer hover:bg-lime-700 animate-bounce'>
                    <a href='#slogan' onClick={smoothScroll} className="flex w-[136px] h-[48px] place-self-center justify-center items-center shrink-0 font-['SVN-Averia_Serif_Libre'] text-[24px] font-normal text-[#fff] relative text-center z-[6]">
                        Khám phá
                    </a>
                </button>
            </div>

            <div className='flex gap-[10px] items-center grow basis-0 flex-nowrap relative z-[7]'>
                <div className='w-[300px] h-[200px] md:h-[360px] md:w-[262px] lg:h-[420px] lg:w-[306px] xl:h-[420px] xl:w-[306px] cf:h-[486px] cf:w-[354px] bg-[url(/src/assets/images/banner-mobile.jpg)] md:bg-[url(/src/assets/images/banner.jpg)] bg-cover bg-no-repeat bg-center rounded-[12px] border-solid border border-[#323232] relative z-[8]' />
                <div className='flex w-[88px] flex-col gap-[10px] items-center flex-nowrap relative z-[9]'>
                    <span className="flex w-[88px] h-[81px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[18px] font-bold leading-[22.992px] text-[#8b5e3c] relative text-center rotate-90 z-10">
                        Follow us
                    </span>
                    <div className='w-px h-[40px] shrink-0 bg-[url(/src/assets/images/social-line.png)] bg-cover bg-no-repeat relative z-[11]' />
                    <a href="https://www.instagram.com/nangchayvn" target="_blank" rel="noopener noreferrer" className='w-[24px] h-[24px] inline-block transform transition-transform duration-300 hover:translate-x-2'>
                        <div className='w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[12]'>
                            <div className='w-[20.001px] h-[20px] bg-[url(/src/assets/images/social-insta.png)] bg-[length:100%_100%] bg-no-repeat relative z-[13] mt-[2px] mr-0 mb-0 ml-[1.999px]' />
                        </div>
                    </a>
                    <a href="https://www.facebook.com/nangchayvn" target="_blank" rel="noopener noreferrer" className='w-[24px] h-[24px] inline-block transform transition-transform duration-300 hover:translate-x-2'>
                        <div className='w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[14]'>
                            <div className='w-[20px] h-[19.95px] bg-[url(/src/assets/images/social-fb.png)] bg-[length:100%_100%] bg-no-repeat relative z-[15] mt-[2px] mr-0 mb-0 ml-[2px]' />
                        </div>
                    </a>
                    <a href="https://www.tiktok.com/@nangchayvn" target="_blank" rel="noopener noreferrer" className='w-[24px] h-[24px] inline-block transform transition-transform duration-300 hover:translate-x-2'>
                        <div className='w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[16]'>
                            <div className='w-[15.68px] h-[18px] bg-[url(/src/assets/images/social-tiktok.png)] bg-[length:100%_100%] bg-no-repeat relative z-[17] mt-[3px] mr-0 mb-0 ml-[4.16px]' />
                        </div>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Banner