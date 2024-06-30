import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTopButton.css'; // Tạo một file CSS riêng nếu cần thiết

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisibility);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top-btn"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
