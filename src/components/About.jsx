import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { GiPirateSkull, GiTreasureMap, GiPirateCaptain } from "react-icons/gi";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    // Animate the floating icons
    gsap.to(".floating-icon", {
      y: -20,
      duration: 2,
      ease: "power1.inOut",
      stagger: 0.3,
      repeat: -1,
      yoyo: true,
    });

    // Animate stats on scroll
    gsap.from(".stat-card", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".stats-container",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div id='treasures' className='min-h-screen w-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900'>
      {/* Floating background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <GiPirateSkull className='floating-icon absolute top-20 left-10 w-8 h-8 text-red-400 opacity-20' />
        <GiTreasureMap className='floating-icon absolute top-40 right-20 w-10 h-10 text-yellow-400 opacity-30' />
        <GiPirateCaptain className='floating-icon absolute top-60 left-1/4 w-6 h-6 text-blue-300 opacity-25' />
      </div>

      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5 px-4'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-12 h-0.5 bg-red-500'></div>
          <p className='font-general text-sm uppercase md:text-[12px] text-yellow-400 tracking-wider'>
            Welcome to the Grand Line
          </p>
          <div className='w-12 h-0.5 bg-red-500'></div>
        </div>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> greatest pirate <b>a</b>dventure"
          containerClass='mt-5 !text-white text-center drop-shadow-2xl'
        />

        <div className='about-subtext max-w-4xl mx-auto'>
          <p className='text-xl md:text-2xl text-center text-blue-100 mb-4 font-medium'>
            The Ultimate Pirate Journey begins—your quest for the One Piece treasure
          </p>
          <p className='text-gray-300 text-center text-lg leading-relaxed'>
            Join Monkey D. Luffy and the Straw Hat Pirates as they sail across the Grand Line, 
            battling fierce enemies, discovering new islands, and chasing their dreams in the 
            greatest pirate adventure ever told.
          </p>
        </div>

        {/* Stats Section */}
        <div className='stats-container grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-12 w-full max-w-4xl'>
          <div className='stat-card bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-xl text-center shadow-2xl border border-red-400/30'>
            <div className='text-3xl font-bold text-white mb-2'>1000+</div>
            <div className='text-red-100 text-sm uppercase tracking-wide'>Episodes</div>
            <div className='text-red-200 text-xs mt-1'>Of Epic Adventures</div>
          </div>

          <div className='stat-card bg-gradient-to-br from-yellow-500 to-orange-600 p-6 rounded-xl text-center shadow-2xl border border-yellow-400/30'>
            <div className='text-3xl font-bold text-white mb-2'>10+</div>
            <div className='text-yellow-100 text-sm uppercase tracking-wide'>Crew Members</div>
            <div className='text-yellow-200 text-xs mt-1'>Loyal Nakama</div>
          </div>

          <div className='stat-card bg-gradient-to-br from-blue-600 to-purple-700 p-6 rounded-xl text-center shadow-2xl border border-blue-400/30'>
            <div className='text-3xl font-bold text-white mb-2'>∞</div>
            <div className='text-blue-100 text-sm uppercase tracking-wide'>Dreams</div>
            <div className='text-blue-200 text-xs mt-1'>To Become Reality</div>
          </div>
        </div>

        {/* Quote Section */}
        <div className='quote-section bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto mb-16'>
          <div className='text-center'>
            <div className='text-6xl text-yellow-400 mb-4'>"</div>
            <p className='text-xl md:text-2xl text-white font-medium italic leading-relaxed'>
              I'm gonna be King of the Pirates!
            </p>
            <div className='mt-4 flex items-center justify-center gap-3'>
              <div className='w-8 h-0.5 bg-red-500'></div>
              <p className='text-red-400 font-semibold'>Monkey D. Luffy</p>
              <div className='w-8 h-0.5 bg-red-500'></div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-dvh w-screen' id='clip'>
        <div className='mask-clip-path about-image relative overflow-hidden'>
          <img
            src='img/about.webp'
            alt='One Piece Grand Line Adventure'
            className='absolute left-0 top-0 size-full object-cover'
          />
          {/* Overlay for better text readability */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30'></div>
          
          {/* Overlay content */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='text-center text-white z-10'>
              <h2 className='text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl'>
                Set Sail for Adventure
              </h2>
              <p className='text-xl md:text-2xl drop-shadow-lg max-w-2xl mx-auto px-4'>
                The Grand Line awaits those brave enough to chase their dreams
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;