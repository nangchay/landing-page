import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQs = () => {

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const toggleFAQ = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <div id='faqs' className='w-[1280px] h-[720px] bg-[#fff] relative overflow-hidden z-[56] mt-0 mr-0 mb-0 ml-0'>
            <div className='flex h-[491px] flex-col gap-[24px] items-start absolute top-[65px] left-[159px] right-[665.994px] z-[59]'>
                <span className="flex w-[455.006px] h-[123px] justify-start items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[48px] font-light leading-[60.609px] text-[#6b8439] relative text-left z-[60]">
                    Bạn hỏi, tôi trả lời
                </span>
                <div className='h-px self-stretch shrink-0 bg-[url(../assets/images/19d17bdc-fe61-4f6b-a7eb-ecaa2935ef85.png)] bg-cover bg-no-repeat relative z-[61]' />
                <div className='flex h-[172px] flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative'>
                    <div className='flex gap-[90px] items-start self-stretch shrink-0 flex-nowrap relative'>
                        <span className="font-['SVN-Averia_Serif_Libre'] text-[24px] font-bold leading-[31px] text-[#323232]">
                            Công dụng của dầu dừa là gì?
                        </span>

                        <div className='cursor-pointer w-[38px] h-[38px] shrink-0 relative overflow-hidden' onClick={() => toggleFAQ(0)}>
                            <div className='w-[22.167px] h-[3.167px] relative mt-[17.414px] mr-0 mb-0 ml-[7.917px]'>
                                {expandedIndex === 0 ? <FaMinus /> : <FaPlus />}
                            </div>
                        </div>

                    </div>
                    {expandedIndex === 0 && (
                        <span className="flex w-[455.s006px] h-[114px] justify-start items-start self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25.254px] text-[#707070] relative text-left">
                            Dầu dừa không chỉ để dưỡng da, dầu dừa còn có giá trị trong việc chăm sóc sắc đẹp như dưỡng tóc, tẩy trang, dưỡng mi hay dành cho mẹ và bé như giảm rạn da, tăng cường đề kháng cho bé,...
                        </span>
                    )}

                    <div className='flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[68]'>
                        <span className="flex w-[414px] h-[50px] justify-start items-center shrink-0 font-['SVN-Averia_Serif_Libre'] text-[24px] font-bold leading-[50px] text-[#323232] relative text-left z-[69]">
                            Dầu dừa có thể sử dụng cho trẻ sơ sinh được không?
                        </span>
                        <div className='cursor-pointer w-[38px] h-[38px] shrink-0 relative overflow-hidden z-[70]' onClick={() => toggleFAQ(1)}>
                            <div className='w-[22.167px] h-[22.167px]relative z-[71] mt-[7.914px] mr-0 mb-0 ml-[7.917px]'>
                                {expandedIndex === 1 ? <FaMinus /> : <FaPlus />}
                            </div>
                        </div>
                    </div>

                    {expandedIndex === 1 && (
                        <span className="flex w-[455.s006px] h-[114px] justify-start items-start self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25.254px] text-[#707070] relative text-left">
                            Dầu dừa có thể được sử dụng cho trẻ sơ sinh nhưng cần thận trọng và thử nghiệm trước trên một vùng da nhỏ để đảm bảo không gây kích ứng.
                        </span>
                    )}

                    <div className='flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[72]'>
                        <span className="flex w-[414px] h-[50px] justify-start items-center shrink-0 font-['SVN-Averia_Serif_Libre'] text-[24px] font-bold leading-[50px] text-[#323232] relative text-left z-[73]">
                            Dầu dừa có tác dụng gì với tóc?
                        </span>
                        <div className='cursor-pointer w-[38px] h-[38px] shrink-0 relative overflow-hidden z-[74]' onClick={() => toggleFAQ(2)}>
                            <div className='w-[22.167px] h-[22.167px] relative z-[75] mt-[7.914px] mr-0 mb-0 ml-[7.917px]'>
                                {expandedIndex === 2 ? <FaMinus /> : <FaPlus />}
                            </div>
                        </div>
                    </div>

                    {expandedIndex === 2 && (
                        <span className="flex w-[455.s006px] h-[114px] justify-start items-start self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25.254px] text-[#707070] relative text-left">
                            Dầu dừa làm dưỡng ẩm và nuôi dưỡng tóc, giúp tóc mềm mượt và bóng khỏe. Ngoài ra, nó cũng có thể giúp phục hồi tóc hư tổn và chống rụng tóc.
                        </span>
                    )}

                </div>
            </div>
            <div className='w-[392px] h-[495px] absolute top-[120px] left-[777px] z-[58]'>
                <div className='w-[360px] h-[480px] bg-[url(../assets/images/35b32dbf3f6395e10435d51b150d60b56b1b44cd.png)] bg-cover bg-no-repeat rounded-[8px] absolute top-1/2 left-[32px] translate-x-0 translate-y-[-51.56%] z-[57]' />
                <div className='w-[64px] h-[64px] bg-[url(../assets/images/020b2664-19dc-44ab-8edc-66a6eff6a1b7.png)] bg-cover bg-no-repeat absolute top-[431px] left-0 overflow-hidden z-[58]' />
            </div>
        </div>
    );
};

export default FAQs;