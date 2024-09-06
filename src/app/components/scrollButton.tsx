'use client'

import { ChevronsDown } from 'lucide-react';

export default function ScrollButton() {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const aboutSectionPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: aboutSectionPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className='w-100% mt-14 flex justify-center animate-bounce cursor-pointer'
      onClick={handleScrollToAbout}
    >
      <ChevronsDown size={60} />
    </div>
  );
}