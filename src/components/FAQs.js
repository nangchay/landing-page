import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQs = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div id='faqs' className='w-screen flex flex-col md:flex-row justify-center items-center w-screen py-8 lg:py-32 bg-[#fff]'>
            <div className='container w-full h-full lg:w-3/5 flex flex-col items-center gap-[24px] lg:ml-6 cf:ml-32 2xl:ml-36'>
                <span className='text-center font-["SVN-Averia_Serif_Libre"] text-[48px] font-light text-[#6b8439]'>
                    Bạn hỏi, tôi trả lời
                </span>
                <div className='w-full max-w-4xl flex flex-col gap-[24px] mt-8'>
                    <div className='w-full'>
                        <div className='flex justify-between items-center p-4 bg-[#f8f4e3] rounded-lg' onClick={() => toggleFAQ(0)}>
                            <span className="font-['SVN-Averia_Serif_Libre'] text-[24px] font-bold text-[#323232]">
                                Công dụng của dầu dừa là gì?
                            </span>
                            <div className='cursor-pointer'>
                                {expandedIndex === 0 ? <FaMinus /> : <FaPlus />}
                            </div>
                        </div>
                        {expandedIndex === 0 && (
                            <div className='p-4 bg-[gray-50] rounded-lg mt-2'>
                                <span className="font-['SVN-Averia_Serif_Libre'] text-[20px] font-light text-[#707070]">
                                    Dầu dừa không chỉ để dưỡng da, dầu dừa còn có giá trị trong việc chăm sóc sắc đẹp như dưỡng tóc, tẩy trang, dưỡng mi hay dành cho mẹ và bé như giảm rạn da, tăng cường đề kháng cho bé,...
                                </span>
                            </div>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-between items-center p-4 bg-[#f8f4e3] rounded-lg' onClick={() => toggleFAQ(1)}>
                            <span className="font-['SVN-Averia_Serif_Libre'] text-[24px] font-bold text-[#323232]">
                                Dầu dừa có thể sử dụng cho trẻ sơ sinh được không?
                            </span>
                            <div className='cursor-pointer'>
                                {expandedIndex === 1 ? <FaMinus /> : <FaPlus />}
                            </div>
                        </div>
                        {expandedIndex === 1 && (
                            <div className='p-4 bg-gray-50 rounded-lg mt-2'>
                                <span className="font-['SVN-Averia_Serif_Libre'] text-[20px] font-light text-[#707070]">
                                    Dầu dừa có thể được sử dụng cho trẻ sơ sinh nhưng cần thận trọng và thử nghiệm trước trên một vùng da nhỏ để đảm bảo không gây kích ứng.
                                </span>
                            </div>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-between items-center p-4 bg-[#f8f4e3] rounded-lg' onClick={() => toggleFAQ(2)}>
                            <span className="font-['SVN-Averia_Serif_Libre'] text-[24px] font-bold text-[#323232]">
                                Dầu dừa có tác dụng gì với tóc?
                            </span>
                            <div className='cursor-pointer'>
                                {expandedIndex === 2 ? <FaMinus /> : <FaPlus />}
                            </div>
                        </div>
                        {expandedIndex === 2 && (
                            <div className='p-4 bg-gray-50 rounded-lg mt-2'>
                                <span className="font-['SVN-Averia_Serif_Libre'] text-[20px] font-light text-[#707070]">
                                    Dầu dừa làm dưỡng ẩm và nuôi dưỡng tóc, giúp tóc mềm mượt và bóng khỏe. Ngoài ra, nó cũng có thể giúp phục hồi tóc hư tổn và chống rụng tóc.
                                </span>
                            </div>
                        )}
                    </div>
                    {/* Thêm nhiều FAQs tương tự */}

                </div>
            </div>
            <div className='hidden lg:block flex flex-col md:w-2/5 relative'>
                <div className='w-[360px] h-[480px] bg-[url(/src/assets/images/faq-thumb.png)] bg-cover bg-no-repeat rounded-[8px] relative left-8' />
                <div className='w-[64px] h-[64px] bg-[url(/src/assets/images/coco.png)] bg-cover bg-no-repeat absolute bottom-0 left-0' />
            </div>
        </div>
    );
};

export default FAQs;