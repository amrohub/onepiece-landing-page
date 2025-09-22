import clsx from "clsx";

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-8 py-3 text-white font-bold shadow-lg hover:shadow-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300 border-2 border-yellow-400",
        containerClass
      )}
    >
      {leftIcon}

      <span className='relative inline-flex overflow-hidden font-general text-sm uppercase tracking-wide'>
        <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12'>
          {title}
        </div>
        <div className='absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'>
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
