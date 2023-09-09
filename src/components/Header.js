import logo from "@/assets/logo.png";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { FaGlobe, FaUserCircle } from 'react-icons/fa';
const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex flex-row items-center justify-between gap-3 md:gap-0 bg-white shadow-md p-5 md:px-10 ">
      {/* left  */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={logo}
          width={120}
          alt="Air BNB"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle  */}

      <div className="flex items-center md:border-2 rounded-full px-3 py-2 md:shadow-sm">
        <input type="text" className="bg-transparent flex-grow outline-none md:pl-5  text-gray-600 placeholder-gray-400" placeholder="Start Your Search" />
        <AiOutlineSearch className="hidden lg:inline-flex w-6 h-6 lg:bg-red-400 p-2  rounded-full text-white md:mx-2"/>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="hidden lg:inline-flex w-6 h-6 lg:bg-red-400 p-2 text-xl rounded-full text-white md:mx-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg> */}
      </div>
      {/* right  */}
      <div className="flex items-center justify-end">
        <p className="hidden md:inline cursor-pointer md:mr-2">Become a host</p>
        <FaGlobe className="h-6 cursor-pointer mr-2"/>
          <div className="flex items-center space-x-2 p-2 border rounded-full">
         <AiOutlineMenu/>
         <FaUserCircle/>
         </div>
      </div>
    </header>
  );
};

export default Header;
