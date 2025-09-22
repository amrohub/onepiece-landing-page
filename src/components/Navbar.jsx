import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { GiTreasureMap } from "react-icons/gi";

import Button from "./Button";

const navItems = ["Crew", "Adventures", "Treasures", "Contact"];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'
    >
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
        <nav className='hidden md:flex size-full items-center justify-between p-4'>
          {/* Logo and Crew button */}
          <div className='flex items-center gap-7'>
            <div className='flex items-center gap-2'>
              <img src='/img/Straw-Hat-Logo.png' alt='Straw Hat Logo' className='w-20 h-10' />
              <span className='text-xl font-bold text-white'>Straw Hat</span>
            </div>

            <Button
              id='crew-button'
              title='Join Crew'
              rightIcon={<TiLocationArrow />}
              containerClass='bg-red-500 hover:bg-red-600 md:flex hidden items-center justify-center gap-1 text-white transition-colors duration-300'
            />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className='flex h-full items-center'>
            <div className='hidden md:block'>
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className='nav-hover-btn relative group px-4 py-2 mx-2 text-white font-medium transition-all duration-300 hover:text-yellow-400'
                >
                  {item}
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full'></span>
                </a>
              ))}
            </div>

            {/* Treasure Map Icon */}
            <div className='mx-4'>
              <GiTreasureMap className='w-6 h-6 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 cursor-pointer' />
            </div>

            {/* Audio Indicator with Pirate Theme */}
            <button
              onClick={toggleAudioIndicator}
              className='ml-6 flex items-center space-x-0.5 p-2 rounded-full hover:bg-blue-900/30 transition-all duration-300'
              title={isAudioPlaying ? 'Pause Sea Shanty' : 'Play Sea Shanty'}
            >
              <audio
                ref={audioElementRef}
                className='hidden'
                src='/audio/loop.mp3'
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line bg-blue-400", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                    width: '3px',
                    height: `${12 + bar * 2}px`,
                    borderRadius: '1px',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className='flex md:hidden size-full items-center justify-between p-4'>
          <div className='flex items-center gap-2'>
            <img src='/img/Straw-Hat-Logo.png' alt='Straw Hat Logo' className='w-8 h-8' />
            <span className='text-lg font-bold text-white'>Straw Hat</span>
          </div>

          <div className='flex items-center gap-4'>
            <GiTreasureMap className='w-6 h-6 text-yellow-400' />
            <button
              onClick={toggleAudioIndicator}
              className='flex items-center space-x-0.5'
            >
              {[1, 2, 3].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line bg-blue-400", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                    width: '2px',
                    height: `${8 + bar * 2}px`,
                    borderRadius: '1px',
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;