import React from 'react';
import './index.css';
import { useState, useEffect, useRef } from 'react';
import ValueSection from './components/ValueSection/ValueSection';
import FAQs from './components/FAQs/FAQs';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShow(false);
    } else {
      // Scrolling up
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const navRef = useRef(null);
  const [activeTab, setActiveTab] = useState('main');

  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        // top: targetElement.offsetTop,
        behavior: 'smooth'
      });

      setActiveTab(targetId);
      setIsMobileMenuOpen(false);
    }

    const links = navRef.current.querySelectorAll('a');
    links.forEach(link => {
      link.classList.remove('text-[#6b8439]');
      link.classList.add('text-[#707070]');
    });
    e.target.classList.remove('text-[#707070]');
    e.target.classList.add('text-[#6b8439]');
  };

  const handleBackgroundClick = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleBackgroundClick);
    } else {
      document.removeEventListener('click', handleBackgroundClick);
    }

    return () => {
      document.removeEventListener('click', handleBackgroundClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <div ref={navRef} className={`fixed top-0 w-full bg-white z-50 transition-transform duration-300 ${show ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className='flex w-[1107px] justify-between items-center flex-nowrap relative z-[18] mt-[33px] mr-0 mb-0 ml-[87px]'>
        <div className='flex w-[362px] gap-[4px] items-center shrink-0 flex-nowrap relative z-[19]'>
          <div className='w-[78px] h-[62.156px] shrink-0 bg-[url(../assets/images/778cf297-6bcc-4a0d-8a0d-5c109e912e73.png)] bg-cover bg-no-repeat rounded-[13px] relative z-20' />
          <div className="w-[280px] shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-bold leading-[25.547px] relative text-left whitespace-nowrap z-[21]">
            <a href='./' className="font-['SVN-Averia_Serif_Libre'] text-[20px] font-bold leading-[25.547px] text-[#6b8439] relative text-left">
              Nàng Chay
              <br />
            </a>
            <span className="font-['SVN-Averia_Serif_Libre'] text-[16px] font-normal leading-[25.547px] text-[#707070] relative text-left">
              <em>Sản phẩm thuần chay</em>
            </span>
          </div>
        </div>
        <div className='hidden md:flex w-[394px] gap-[50px] items-start shrink-0 flex-nowrap relative z-[22]'>
          <a href="#main" onClick={(e) => smoothScroll(e, 'main')} className={`h-[30px] shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[24px] font-bold leading-[30px] relative text-left whitespace-nowrap z-[23] ${activeTab === 'main' ? 'text-[#6b8439]' : 'text-[#707070]'} hover:text-[#6b8439]`}>
            Main
            {activeTab === 'main' && <div className="w-full h-[3px] bg-[#6b8439] absolute bottom-0 left-0 transition-transform duration-800 ease-in-out transform translate-x-0" />}
          </a>
          <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className={`h-[30px] shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[24px] font-normal leading-[30px] relative text-left whitespace-nowrap z-[24] ${activeTab === 'about' ? 'text-[#6b8439]' : 'text-[#707070]'} hover:text-[#6b8439]`}>
            About
            {activeTab === 'about' && <div className="w-full h-[3px] bg-[#6b8439] absolute bottom-0 left-0 transition-transform duration-800 ease-in-out transform translate-x-0" />}
          </a>
          <a href="#value" onClick={(e) => smoothScroll(e, 'value')} className={`h-[30px] shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[24px] font-normal leading-[30px] relative text-left whitespace-nowrap z-[25] ${activeTab === 'value' ? 'text-[#6b8439]' : 'text-[#707070]'} hover:text-[#6b8439]`}>
            Value
            {activeTab === 'value' && <div className="w-full h-[3px] bg-[#6b8439] absolute bottom-0 left-0 transition-transform duration-800 ease-in-out transform translate-x-0" />}
          </a>
          <a href="#faqs" onClick={(e) => smoothScroll(e, 'faqs')} className={`h-[30px] shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[24px] font-normal leading-[30px] relative text-left whitespace-nowrap z-[26] ${activeTab === 'faqs' ? 'text-[#6b8439]' : 'text-[#707070]'} hover:text-[#6b8439]`}>
            FAQs
            {activeTab === 'faqs' && <div className="w-full h-[3px] bg-[#6b8439] absolute bottom-0 left-0 transition-transform duration-800 ease-in-out transform translate-x-0" />}
          </a>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-[#707070] hover:text-[#6b8439] focus:outline-none'>
            <svg className="w20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-30 left-0 w-full bg-[#f8f4e3] shadow-lg z-40 transition-transform duration-300 transform translate-y-2'>
          <div className="flex flex-col space-y-6 text-center w-full px-4">
            <a href="#main" onClick={(e) => smoothScroll(e, 'main')} className={`font-['SVN-Averia_Serif_Libre'] block px-4 py-2 text-[24px] ${activeTab === 'main' ? 'text-[#6b8439]' : 'text-[#707070]'} hover:text-[#6b8439]`}>Main</a>
            <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className={`font-['SVN-Averia_Serif_Libre'] block px-4 py-2 text-[24px] ${activeTab === 'about' ? 'text-[#6b8439]' : 'text-[#707070]'} hover:text-[#6b8439]`}>About</a>
            <a href="#value" onClick={(e) => smoothScroll(e, 'value')} className={`font-['SVN-Averia_Serif_Libre'] block px-4 py-2 text-[24px] ${activeTab === 'value' ? 'text-[#6b8439]' : 'text-[#707070]'} hover:text-[#6b8439]`}>Value</a>
            <a href="#faqs" onClick={(e) => smoothScroll(e, 'faqs')} className={`font-['SVN-Averia_Serif_Libre'] block px-4 py-2 text-[24px] ${activeTab === 'faqs' ? 'text-[#6b8439]' : 'text-[#707070]'} hover:text-[#6b8439]`}>FAQs</a>
          </div>
        </div>
      )}
    </div>
  );
};

const Banner = () => {
  const smoothScroll = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('slogan');
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex w-[1120px] gap-[120px] items-center flex-nowrap relative z-[1] mt-[53.844px] mr-0 mb-0 ml-[80px] pt-[100px]">
      <div className='flex w-[548px] flex-col gap-[36px] items-start shrink-0 flex-nowrap relative z-[2]'>
        <span className="flex w-[548px] h-[162px] justify-start items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[64px] font-normal leading-[80.813px] text-[#323232] relative text-left z-[3]">
          <em>Gắn kết con người với thiên nhiên.</em>
        </span>
        <span className="flex w-[548px] h-[50px] justify-start items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25.254px] text-[#707070] relative text-left z-[4]">
          Đồng hành cùng Nàng Chay trong việc chăm sóc sức khỏe, dinh dưỡng
          và tạo dựng một lối sống thuần chay.
        </span>
        <button className='flex w-[136px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#6b8439] rounded-[5px] border-none relative z-[5] pointer'>
          <a href='#slogan' onClick={smoothScroll} className="flex w-[136px] h-[48px] justify-center items-center shrink-0 font-['SVN-Averia_Serif_Libre'] text-[24px] font-normal leading-[48px] text-[#fff] relative text-center z-[6]">
            Khám phá
          </a>
        </button>
      </div>
      <div className='flex gap-[10px] items-center grow shrink-0 basis-0 flex-nowrap relative z-[7]'>
        <div className='h-[486px] grow shrink-0 basis-0 bg-[url(../assets/images/f2f8d17d-1cb9-4ed7-a22f-f6d794cc2c02.png)] bg-cover bg-no-repeat rounded-[18px] relative z-[8]' />
        <div className='flex w-[88px] flex-col gap-[10px] items-center shrink-0 flex-nowrap relative z-[9]'>
          <span className="flex w-[88px] h-[81px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[18px] font-bold leading-[22.992px] text-[#8b5e3c] relative text-center rotate-90 z-10">
            Follow us
          </span>
          <div className='w-px h-[40px] shrink-0 bg-[url(../assets/images/e98c02ee-93fc-4e64-95a3-8fe8a967f134.png)] bg-cover bg-no-repeat relative z-[11]' />
          <a href="https://www.instagram.com/nangchayvn" target="_blank" rel="noopener noreferrer" className='w-[24px] h-[24px] inline-block transform transition-transform duration-300 hover:translate-x-2'>
            <div className='w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[12]'>
              <div className='w-[20.001px] h-[20px] bg-[url(../assets/images/1d5b0dee-0943-45ad-95d2-0735bcd96fc6.png)] bg-[length:100%_100%] bg-no-repeat relative z-[13] mt-[2px] mr-0 mb-0 ml-[1.999px]' />
            </div>
          </a>
          <a href="https://www.facebook.com/nangchayvn" target="_blank" rel="noopener noreferrer" className='w-[24px] h-[24px] inline-block transform transition-transform duration-300 hover:translate-x-2'>
            <div className='w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[14]'>
              <div className='w-[20px] h-[19.95px] bg-[url(../assets/images/1e481986-c89f-4d02-b363-58d6bc842b4b.png)] bg-[length:100%_100%] bg-no-repeat relative z-[15] mt-[2px] mr-0 mb-0 ml-[2px]' />
            </div>
          </a>
          <a href="https://www.tiktok.com/@nangchayvn" target="_blank" rel="noopener noreferrer" className='w-[24px] h-[24px] inline-block transform transition-transform duration-300 hover:translate-x-2'>
            <div className='w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[16]'>
              <div className='w-[15.68px] h-[18px] bg-[url(../assets/images/e99f06a4-0c3f-4088-8caf-66cef6c18f92.png)] bg-[length:100%_100%] bg-no-repeat relative z-[17] mt-[3px] mr-0 mb-0 ml-[4.16px]' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Main() {
  return (
    <div className='main-container w-[1280px] h-[3592px] relative mx-auto my-0'>
      <div id='main' className='w-[1280px] h-[720px] bg-[#fff] relative overflow-hidden mt-0 mr-0 mb-0 ml-0'>
        <Navigation />
        <Banner />
      </div>
      <div id='about' className='w-[1280px] h-[632px] bg-[#fff] relative overflow-hidden z-[28] mt-[320px] mr-0 mb-0 ml-0'>
        <div className='w-[941.768px] h-[470px] absolute top-[71px] left-[535px] z-[32]'>
          <div className='w-[740.768px] h-[740.514px] bg-[url(../assets/images/462477c9-e6be-4565-a475-bf954a09d791.png)] bg-cover bg-no-repeat absolute top-0 left-[201px] z-[32]' />
          <span className="flex w-[384px] h-[81px] justify-center items-center font-['SVN-Averia_Serif_Libre'] text-[64px] font-light leading-[80.813px] text-[#6b8439] absolute top-[25px] left-px text-center whitespace-nowrap z-30">
            <em>Về Nàng Chay</em>
          </span>
          <div className="w-[650px] h-[334px] font-['SVN-Averia_Serif_Libre'] text-[20px] font-normal leading-[25.254px] absolute top-[136px] left-0 text-left z-[31]">
            <span className="font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25.254px] text-[#323232] relative text-left">
              Nàng Chay - thương hiệu sản phẩm thuần chay được sáng lập với sứ
              mệnh "
            </span>
            <span className="font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25.254px] text-[#b77f5d] relative text-left">
              gắn kết con người với thiên nhiên
            </span>
            <span className="font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25.254px] text-[#323232] relative text-left">
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
        <div className='w-[383px] h-[468px] bg-[url(../assets/images/e047338c-a349-4b60-b8e5-7ec5f661cc23.png)] bg-cover bg-no-repeat rounded-[18px] absolute top-1/2 left-[80px] translate-x-0 translate-y-[-50%] z-[29]' />
      </div>

      <ValueSection />
      <FAQs />

      <div className='w-[1280px] h-[400px] bg-[#6b8439] relative overflow-hidden z-[76] mt-0 mr-0 mb-0 ml-0'>
        <div className='flex w-[1098px] gap-[75px] justify-center items-start flex-nowrap relative z-[79] mt-[32px] mr-0 mb-0 ml-[91px]'>
          <div className='flex w-[316px] flex-col gap-[12px] items-center shrink-0 flex-nowrap relative z-[80]'>
            <div className='w-[128px] h-[128px] shrink-0 bg-[url(../assets/images/d97f02c2-b3dd-4ecf-8a53-cdbdab04d8a5.png)] bg-cover bg-no-repeat relative z-[81]' />
            <span className="flex w-[316px] h-[50px] justify-start items-start self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25.254px] text-[#fff] relative text-left z-[82]">
              Nếu có thắc mắc, bạn hãy lại lời nhắn cho Nàng Chay tại đây!
            </span>
            <div className='flex pt-[10px] pr-0 pb-[10px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[83]'>
              <input type='email' placeholder='Nhập email của bạn ...' className='flex w-[200px] h-[48px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#f8f4e3] rounded-[8px] border-solid border-2 border-[#b77f5d] relative z-[84] pointer' />
              <button className='flex w-[96px] h-[48px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#603913] rounded-[8px] border-none relative z-[86] pointer'>
                <span className="flex w-[50px] h-[23px] justify-center items-center shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[18px] font-normal leading-[23px] text-[#fff] relative text-center whitespace-nowrap z-[87]">
                  Gửi đi
                </span>
              </button>
            </div>
          </div>
          <div className='flex w-[316px] flex-col items-center shrink-0 flex-nowrap relative z-[88]'>
            <span className="flex w-[316px] h-[80px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[32px] font-bold leading-[40.875px] text-[#fff] relative text-center z-[89]">
              Liên hệ
            </span>
            <span className="flex w-[316px] h-[50px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-normal leading-[25.254px] text-[#fff] relative text-center z-[90]">
              support@nangchay.com
            </span>
            <span className="flex w-[316px] h-[50px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-normal leading-[25.254px] text-[#fff] relative text-center z-[91]">
              +84 398.156.371
            </span>
            <div className='flex h-[50px] gap-[23px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[92]'>
              <a href="https://www.instagram.com/nangchayvn" target="_blank" rel="noopener noreferrer" className='w-[36px] h-[36px] inline-block transform transition-transform duration-300 hover:translate-y-2'>
                <div className='w-[36px] h-[36px] shrink-0 relative overflow-hidden z-[93]'>
                  <div className='w-[30.002px] h-[30.001px] bg-[url(../assets/images/4be25dad-258b-4657-bd1a-2a93e7c6dd9e.png)] bg-[length:100%_100%] bg-no-repeat relative z-[94] mt-[3px] mr-0 mb-0 ml-[2.999px]' />
                </div>
              </a>
              <a href="https://www.facebook.com/nangchayvn" target="_blank" rel="noopener noreferrer" className='w-[36px] h-[36px] inline-block transform transition-transform duration-300 hover:translate-y-2'>
                <div className='w-[36px] h-[36px] shrink-0 relative overflow-hidden z-[95]'>
                  <div className='w-[30px] h-[29.925px] bg-[url(../assets/images/be78bde7-0436-42a8-a8e2-ce67b98bcc70.png)] bg-[length:100%_100%] bg-no-repeat relative z-[96] mt-[3px] mr-0 mb-0 ml-[3px]' />
                </div>
              </a>
              <a href="https://www.tiktok.com/@nangchayvn" target="_blank" rel="noopener noreferrer" className='w-[36px] h-[36px] inline-block transform transition-transform duration-300 hover:translate-y-2'>
                <div className='w-[36px] h-[36px] shrink-0 relative overflow-hidden z-[97]'>
                  <div className='w-[23.52px] h-[27px] bg-[url(../assets/images/3afa8208-e4ff-45a5-87c4-2d6639bde8c2.png)] bg-[length:100%_100%] bg-no-repeat relative z-[98] mt-[4.5px] mr-0 mb-0 ml-[6.24px]' />
                </div>
              </a>
            </div>
          </div>
          <div className='flex w-[316px] flex-col items-center shrink-0 flex-nowrap relative z-[99]'>
            <span className="flex w-[316px] h-[80px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[32px] font-bold leading-[40.875px] text-[#fff] relative text-center z-[100]">
              Đề xuất
            </span>
            <span className="flex w-[316px] h-[50px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25.254px] text-[#fff] relative text-center underline z-[101]">
              Hợp tác doanh nghiệp
            </span>
            <span className="flex w-[316px] h-[50px] justify-center items-center self-stretch shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25.254px] text-[#fff] relative text-center underline z-[102]">
              Nghiên cứu sản phẩm mới
            </span>
          </div>
        </div>
        <div className='flex w-[400px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-start flex-nowrap relative z-[77] mt-[22px] mr-0 mb-0 ml-[440px]'>
          <span className="h-[25px] grow shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[20px] font-light leading-[25px] text-[#fff] relative text-center whitespace-nowrap z-[78]">
            ⓒ Nàng Chay Official. All right reserved
          </span>
        </div>
      </div>
      <div id='slogan' className='w-[1280px] h-[320px] bg-[url(../assets/images/eb89cadc-7e94-4c37-beb4-15c07b85b305.png)] bg-cover bg-no-repeat absolute top-[720px] left-0 overflow-hidden z-[27]' />
    </div>
  );
}
