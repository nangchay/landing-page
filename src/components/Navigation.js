import { useState, useEffect, useRef, useCallback } from 'react';
import AOS from 'aos';
import { MenuIcon, XIcon } from '@heroicons/react/outline';


function Navigation() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Thời gian hiệu ứng (ms)
        });
    }, []);

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [nav, setNav] = useState(false)
    const [activeTab, setActiveTab] = useState('main');
    const navRef = useRef(null);

    const handleClose = () => setNav(false);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            setShow(false);
        } else {
            // Scrolling up
            setShow(true);
            if (window.matchMedia('(max-width: 1024px)').matches && window.scrollY === 0) {
                setShow(true) // Keep mobile menu visible when scrolled to top
            }
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }; // eslint-disable-next-line
    }, [lastScrollY]);

    const smoothScroll = (e, target) => {
        e.preventDefault();
        setActiveTab(target);
        const element = document.getElementById(target);
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
        handleClose();
    };

    const handleBackgroundClick = useCallback((e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
            handleClose();
        }
    }, [navRef]);

    useEffect(() => {
        const handleResize = () => {
            if (!window.matchMedia('(max-width: 1024px)').matches) {
                setNav(false); // Đóng menu khi chuyển về desktop view
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (nav) {
            document.addEventListener('click', handleBackgroundClick);
        } else {
            document.removeEventListener('click', handleBackgroundClick);
        }

        return () => {
            document.removeEventListener('click', handleBackgroundClick);
        };
    }, [nav, handleBackgroundClick]);

    const handleMenuClick = (e) => {
        e.stopPropagation();
        setNav(prevNav => !prevNav);
    };

    return (
        // Navigation bar on large screen
        <div ref={navRef} className={`fixed top-0 w-screen bg-[url(/src/assets/images/bg-banner.jpeg)] bg-center bg-cover bg-no-repeat z-[120] transition-transform duration-300 ${show ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <div data-aos="fade-down" id='main' className='w-full h-[100px] z-[120] flex relative cf:mt-[33px] mb-0'>

                <div className='px-4 sm:px-12 xl:px-48 flex justify-between items-center w-full h-full z-[120]'>
                    <div className='flex items-center z-[120]'>
                        <div className={`lg:ml-4 w-[78px] h-[62.156px] shrink-0 bg-[url(/src/assets/images/logo.png)] bg-cover bg-no-repeat rounded-[13px] relative z-[120] cursor-pointer`} onClick={() => window.location.reload()} />
                        <div className="shrink-0 font-['SVN-Averia_Serif_Libre'] text-[20px] font-bold leading-[25.547px] relative text-left whitespace-nowrap z-[120]">
                            <a href='./' className={`font-['SVN-Averia_Serif_Libre'] 20px font-bold leading-[25.547px] text-[#6b8439] relative text-left z-[120]`}>
                                Nàng Chay
                                <br />
                            </a>
                            <a href='./' className={`font-['SVN-Averia_Serif_Libre'] 16px font-normal leading-[25.547px] text-[#707070] relative text-left z-[120]`}>
                                <em>Sản phẩm thuần chay</em>
                            </a>
                        </div>
                    </div>
                    <div className='hidden xl:flex z[120]'>

                        <ul className='hidden text-[#323232] xl:flex z-[120]'>
                            <li>
                                <a href="#main" onClick={(e) => smoothScroll(e, 'main')} className={`h-[30px] shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[24px] leading-[30px] relative text-left whitespace-nowrap z-[27] ${activeTab === 'main' ? 'text-[#6b8439] font-bold' : 'text-[#707070] font-normal'} hover:text-[#6b8439]`}>
                                    Trang chủ
                                    {activeTab === 'main' && <div className="w-full h-[3px] bg-[#6b8439] absolute bottom-0 left-0 transition-transform duration-800 ease-in-out transform translate-x-0" />}
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className={`h-[30px] shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[24px] leading-[30px] relative text-left whitespace-nowrap z-[29] ${activeTab === 'about' ? 'text-[#6b8439] font-bold' : 'text-[#707070] font-normal'} hover:text-[#6b8439]`}>
                                    Về Nàng Chay
                                    {activeTab === 'about' && <div className="w-full h-[3px] bg-[#6b8439] absolute bottom-0 left-0 transition-transform duration-800 ease-in-out transform translate-x-0" />}
                                </a>
                            </li>
                            <li>
                                <a href="#value" onClick={(e) => smoothScroll(e, 'value')} className={`h-[30px] shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[24px] leading-[30px] relative text-left whitespace-nowrap z-[31] ${activeTab === 'value' ? 'text-[#6b8439] font-bold' : 'text-[#707070] font-normal'} hover:text-[#6b8439]`}>
                                    Sản phẩm
                                    {activeTab === 'value' && <div className="w-full h-[3px] bg-[#6b8439] absolute bottom-0 left-0 transition-transform duration-800 ease-in-out transform translate-x-0" />}
                                </a>
                            </li>
                            <li>
                                <a href="#faqs" onClick={(e) => smoothScroll(e, 'faqs')} className={`h-[30px] shrink-0 basis-auto font-['SVN-Averia_Serif_Libre'] text-[24px] leading-[30px] relative text-left whitespace-nowrap z-[33] ${activeTab === 'faqs' ? 'text-[#6b8439] font-bold' : 'text-[#707070]'} hover:text-[#6b8439]`}>
                                    Câu hỏi thường gặp
                                    {activeTab === 'faqs' && <div className="w-full h-[3px] bg-[#6b8439] absolute bottom-0 left-0 transition-transform duration-800 ease-in-out transform translate-x-0" />}
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className='xl:hidden mr-4 z-[120]' onClick={handleMenuClick}>
                        {!nav ? <MenuIcon className='w-8 cursor-pointer text-[#6b8439]' /> : <div className='flex'>
                            <XIcon className='w-8 text-[#6b8439] cursor-pointer' />
                        </div>}

                    </div>

                </div>


                {/* Navigation on small screens */}
                <ul ref={navRef} className={!nav ? 'hidden' : 'absolute bg-[#f8f4e3] w-full mt-24 px-8 z-[120]'}>
                    <li onClick={(e) => smoothScroll(e, 'main')} className={`font-['SVN-Averia_Serif_Libre'] text-[24px] border-b-2 border-zinc-300 w-full ${activeTab === 'main' ? 'text-[#6b8439]' : 'text-[#707070]'}`}>
                        Trang chủ
                    </li>
                    <li onClick={(e) => smoothScroll(e, 'about')} className={`font-['SVN-Averia_Serif_Libre'] text-[24px] border-b-2 border-zinc-300 w-full ${activeTab === 'about' ? 'text-[#6b8439]' : 'text-[#707070]'}`}>
                        Về Nàng Chay
                    </li>
                    <li onClick={(e) => smoothScroll(e, 'value')} className={`font-['SVN-Averia_Serif_Libre'] text-[24px] border-b-2 border-zinc-300 w-full ${activeTab === 'value' ? 'text-[#6b8439]' : 'text-[#707070]'}`}>
                        Sản phẩm
                    </li>
                    <li onClick={(e) => smoothScroll(e, 'faqs')} className={`font-['SVN-Averia_Serif_Libre'] text-[24px] border-b-2 border-zinc-300 w-full ${activeTab === 'faqs' ? 'text-[#6b8439]' : 'text-[#707070]'}`}>
                        Câu hỏi thường gặp
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navigation