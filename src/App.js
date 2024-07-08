import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop';
import Footer from "./components/Footer";
import About from "./components/About";
import Value from "./components/Value";
import FAQs from "./components/FAQs";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Thời gian hiệu ứng (ms)
    });
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Giả sử bạn đang tải dữ liệu từ API hoặc tài nguyên bên ngoài
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Thời gian giả lập tải dữ liệu
  }, []);

  return (
    <div className="main-container w-screen h-screen relative mx-auto my-0">
      {isLoading ? (
        <div className="conaitner w-full h-full flex flex-row justify-center items-center bg-[#f8f4e3] relative">
          <div className="flex justify-center items-center w-[100px] h-[80px] bg-[url(https://res.cloudinary.com/nangchay/image/upload/v1720423404/nangchay/logo.png)] bg-center bg-cover bg-no-repeat relative"></div>
          <div className="flip-animation font-['SVN-Averia_Serif_Libre'] text-4xl font-light text-[#6b8439]">
            <span>N</span>
            <span>à</span>
            <span>n</span>
            <span>g</span>
            <span>&nbsp;</span>
            <span>C</span>
            <span>h</span>
            <span>a</span>
            <span>y</span>
          </div>
        </div>
      ) : (
        <>
          <Navigation />
          <Banner />
          <div data-aos="fade-up" id='slogan' className='bg-[#fff] w-full mx-auto h-[72px] sm:h-[80px] md:h-[200px] lg:h-[300px] relative left-0 overflow-hidden z-[27]'>
            <LazyLoadImage
              src="https://res.cloudinary.com/nangchay/image/upload/v1720423404/nangchay/slogan.png"
              alt="Slogan"
              className="object-cover object-cover-center w-full h-full"
            />
            <div className="container absolute inset-0 flex items-center justify-center text-white text-center">
              <p data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500" className="font-['SVN-Averia_Serif_Libre'] text-[20px] md:text-[48px] font-light">
                Nàng Chay bán câu chuyện, bạn có sẵn sàng lắng nghe?
              </p>
            </div>
          </div>
          <About />
          <Value />
          <FAQs />
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
}

export default App;