import React from "react";

function About() {
    return (
        <div id='about' className='bg-[#fff] flex flex-col-reverse lg:flex-row-reverse w-screen gap-0 items-center flex-nowrap relative z-[28] py-8 md:py-16'>
            {/* <div className='w-[740.768px] h-[740.514px] bg-[url(/src/assets/images/coco-leaf.png)] bg-cover bg-no-repeat relative z-[29]' /> */}
            <div className='px-6 xl:px-24 cf:px-32 2xl:px-48 flex w-full h-full flex-col gap-[12px] md:gap-[36px] justify-center place-items-center md:place-items-start z-[30]'>
                <span className="max-flex w-full items-center justify-center md:justify-start self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[48px] sm:text-[64px] font-light text-[#6b8439] text-center lg:text-left relative z-[31]">
                    <em>Về Nàng Chay</em>
                </span>
                <div className="leading-[25.254px] relative left-0 text-left w-full justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-light text-[#707070] relative text-left z-[32]">
                    <span className="text-[#323232] font-['SVN-Averia_Serif_Libre'] text-[20px] font-normal  relative text-left">
                        Nàng Chay - thương hiệu sản phẩm thuần chay được sáng lập với sứ
                        mệnh "
                    </span>
                    <span className="text-[#b77f5d] font-['SVN-Averia_Serif_Libre'] text-[20px] font-normal  relative text-left">
                        gắn kết con người với thiên nhiên
                    </span>
                    <span className="text-[#323232] font-['SVN-Averia_Serif_Libre'] text-[20px] font-normal  relative text-left">
                        ". Chúng tôi tin rằng việc chăm sóc sức khỏe và sắc đẹp là hành
                        trình lâu dài, cần được nuôi dưỡng từ bên trong. Nàng Chay mang
                        đến những sản phẩm với nguyên liệu hoàn toàn thân thiện với môi
                        trường, an toàn và lành tính. Mỗi sản phẩm của Nàng Chay đều được
                        xem như là món quà yêu thương dành cho bản thân và những người
                        thân yêu.
                        <br />
                        <br />
                        Hãy cùng Nàng Chay trải nghiệm lối sống thuần chay và khỏe mạnh!
                    </span>
                </div>
            </div>
            <div className="flex flex-nowrap w-full lg:w-2/5 h-full relative z-[36] justify-center lg:ml-12 cf:ml-32 2xl:ml-48">
                <div className='w-[300px] h-[366.6px] sm:w-[383px] sm:h-[468px] bg-[url(/src/assets/images/about-thumb.png)] bg-cover bg-no-repeat rounded-[18px] relative z-[37]' />
            </div>
            <div className="absolute bottom-0 right-0 w-[160px] h-[160px] bg-[url(/src/assets/images/coco-leaf.png)] bg-cover bg-no-repeat" />
        </div>
    )
}

export default About