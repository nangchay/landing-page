import { React, useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import Modal from './Modal';
import AOS from "aos";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Footer() {
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

    const [email, setEmail] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormReset = () => {
        setEmail("");
    };

    const validateForm = () => {
        if (!email) {
            alert("Please enter your email");
            return false;
        }
        return true;
    };

    const submitToGoogleForm = () => {
        const formData = new FormData();
        const GGL_FORM_EMAIL_ID = `entry.${process.env.EMAIL_ENTRY_ID}`;
        console.log(process.env.EMAIL_ENTRY_ID);
        console.log(process.env.FORM_ID);

        formData.append(GGL_FORM_EMAIL_ID, email);

        fetch(`https://docs.google.com/forms/d/e/${process.env.FORM_ID}/formResponse`, {
            method: "POST",
            body: formData,
            header: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            mode: "no-cors",
        })
            .then(() => {
                setShowModal(true);
                setTimeout(() => {
                    setShowModal(false); // Ẩn modal sau 3 giây
                }, 3000);
                handleFormReset();
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Submission failed");
            });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        submitToGoogleForm();
    };

    return (
        <div data-aos="fade-up" className='w-screen mx-auto lg:h-[400px] bg-[#6b8439] relative overflow-hidden z-[87] mt-0 mb-0'>
            <div className='flex flex-col lg:flex-row w-full gap-[24px] lg:gap-[12px] xl:gap-[75px] justify-center place-items-center lg:place-items-start relative z-[88] mt-[32px] mb-0'>
                <div className='flex w-[316px] flex-col gap-[12px] items-center shrink-0 flex-nowrap relative z-[90]'>
                    <div className='w-[128px] h-[128px] shrink-0 bg-[url(/src/assets/images/logo-footer.png)] bg-cover bg-no-repeat relative z-[91]' />
                    <span className="flex w-[316px] h-[50px] justify-start items-start self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25.254px] text-[#fff] relative text-left z-[92]">
                        Nếu có thắc mắc, bạn hãy lại lời nhắn cho Nàng Chay tại đây!
                    </span>
                    <div className='flex pt-[10px] pr-0 pb-[10px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[93]'>
                        <form className="flex justify-between items-center self-stretch shrink-0 gap-[10px] flex-nowrap relative" onSubmit={onSubmit} onReset={handleFormReset}>
                            <input required type="email" id="email" name="email" value={email} onChange={handleInputChange} placeholder='Nhập email của bạn ...' className='flex w-[200px] h-[48px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#f8f4e3] rounded-[8px] border-solid border-2 border-[#b77f5d] relative z-[94] pointer' />
                            <button className='flex w-[96px] h-[48px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#603913] rounded-[8px] border-none relative z-[95] pointer'>
                                <span className="flex w-[50px] h-[23px] justify-center items-center shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[18px] font-normal leading-[23px] text-[#fff] relative text-center whitespace-nowrap z-[96]">
                                    Gửi đi
                                </span>
                            </button>
                        </form>

                    </div>
                </div>
                {showModal && (
                    <div className="modal fixed inset-0 flex items-center justify-center z-[117]">
                        <div className="font-['SVN-Averia_Serif_Libre'] modal-content bg-white p-4 rounded shadow-lg text-center">
                            <span className="close absolute top-0 right-0 m-3 cursor-pointer" onClick={() => setShowModal(false)}>
                                &times;
                            </span>
                            <AiOutlineCheckCircle size={50} color="green" className="mx-auto mb-4" />
                            <h2 className="text-xl mb-2">Cảm ơn bạn đã đăng ký!</h2>
                            <p>Nàng Chay sẽ liên hệ lại với bạn sớm qua email này.</p>
                        </div>
                    </div>
                )}
                <div className='flex lg:flex-basis-1/3 w-[316px] flex-col items-center shrink-0 flex-nowrap relative z-[97]'>
                    <span className="flex w-[316px] h-[80px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[32px] font-bold leading-[40.875px] text-[#fff] relative text-center z-[98]">
                        Liên hệ
                    </span>
                    <span className="flex w-[316px] h-[50px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-normal leading-[25.254px] text-[#fff] relative text-center z-[99]">
                        support@nangchay.com
                    </span>
                    <span className="flex w-[316px] h-[50px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-normal leading-[25.254px] text-[#fff] relative text-center z-[100]">
                        +84 398.156.371
                    </span>
                    <div className='flex h-[50px] gap-[23px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[101]'>
                        <a href="https://www.instagram.com/nangchayvn" target="_blank" rel="noopener noreferrer" className='w-[36px] h-[36px] inline-block transform transition-transform duration-300 hover:-translate-y-2'>
                            <div className='w-[36px] h-[36px] shrink-0 relative overflow-hidden z-[103]'>
                                <FaInstagram className='text-[#fff] w-[30px] h-[30px] relative z-[104] mt-[3px] mr-0 mb-0 ml-[3px]' />
                            </div>
                        </a>
                        <a href="https://www.facebook.com/nangchayvn" target="_blank" rel="noopener noreferrer" className='w-[36px] h-[36px] inline-block transform transition-transform duration-300 hover:-translate-y-2'>
                            <div className='w-[36px] h-[36px] shrink-0 relative overflow-hidden z-[106]'>
                                <FaFacebook className='text-[#fff] w-[30px] h-[30px] relative z-[107] mt-[3px] mr-0 mb-0 ml-[3px]' />
                            </div>
                        </a>
                        <a href="https://www.tiktok.com/@nangchayvn" target="_blank" rel="noopener noreferrer" className='w-[36px] h-[36px] inline-block transform transition-transform duration-300 hover:-translate-y-2'>
                            <div className='w-[36px] h-[36px] shrink-0 relative overflow-hidden z-[109]'>
                                <FaTiktok className='text-[#fff] w-[30px] h-[30px] relative z-[110] mt-[3px] mr-0 mb-0 ml-[3px]' />
                            </div>
                        </a>
                    </div>
                </div>
                <div className='flex lg:flex-basis-1/3 w-[316px] flex-col items-center shrink-0 flex-nowrap relative z-[111]'>
                    <span className="flex w-[316px] h-[80px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[32px] font-bold leading-[40.875px] text-[#fff] relative text-center z-[112]">
                        Đề xuất
                    </span>
                    <button onClick={openModal} className="flex w-[316px] h-[50px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25.254px] text-[#fff] relative text-center underline z-[113]">
                        Hợp tác doanh nghiệp
                    </button>
                    <button onClick={openModal} className="flex w-[316px] h-[50px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25.254px] text-[#fff] relative text-center underline z-[114]">
                        Nghiên cứu sản phẩm mới
                    </button>
                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>
            <div className='flex w-[400px] mx-auto pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-start flex-nowrap relative z-[115] mt-[22px] mb-0'>
                <span className="h-[25px] grow shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25px] text-[#fff] relative text-center whitespace-nowrap z-[116]">
                    ⓒ Nàng Chay Official. All right reserved
                </span>
            </div>
        </div>
    )
}

export default Footer