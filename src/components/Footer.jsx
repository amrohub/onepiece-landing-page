import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className='w-screen bg-black py-8 text-white relative'>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-50"></div>
      
      <div className='container mx-auto flex flex-col items-center justify-center gap-6 px-4 relative z-10'>
        <div className="text-center">
          <p className='text-sm font-medium text-gray-300'>
            ©Straw Hat Pirates 2025. All adventures reserved
          </p>
          <p className='text-xs text-gray-500 mt-1'>
            Setting sail across the Grand Line since 1997
          </p>
        </div>

        <div className='flex justify-center items-center gap-8'>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 text-xl transition-all duration-300 ease-in-out hover:text-white hover:scale-110 transform'
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href='#privacy-policy'
            className='text-sm font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-300'
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;