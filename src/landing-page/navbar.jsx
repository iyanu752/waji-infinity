import  { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import INFINITYCART from '../assets/logos/infinity-cart.svg';
import INFINITYTEXT from '../assets/logos/infinity-text-logo.svg';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!setSidebar);
  }



  return (
    <>
    <nav className='flex items-center justify-between lg:justify-evenly p-2 bg-purple-600'>
    <div className='flex gap-5'>
    <img src={INFINITYCART} alt='infinity-logo' className='h-16'/>
      <img src={INFINITYTEXT} alt='infinity-text ' className='hidden lg:flex' />
    </div>

      <ul className='lg:flex gap-10 text-white hidden'>
        <li><a className='font-bold hover:text-orange-400 hover: transition duration-300 ease-in-out transform hover:scale-110'>Services</a></li>
        <li><a className='font-bold hover:text-orange-400 hover: transition duration-300 ease-in-out transform hover:scale-110'>About Infinity</a></li>
        <li><a className='font-bold hover:text-orange-400 hover: transition duration-300 ease-in-out transform hover:scale-110'>Pricing</a></li>
        <li><a className='font-bold hover:text-orange-400 hover: transition duration-300 ease-in-out transform hover:scale-110'>Contact Us</a></li>
      </ul>

    <div className='hidden lg:flex'>
    <button className= ' bg-gray-700 p-3 px-10 text-white rounded-lg hover:bg-gray-950 transition duration-300 ease-in-out transform hover:scale-110'> Get Started </button>
    </div>
    <div className='lg:hidden'>
      <HiMenu className='w-7 h-7 text-white' onClick={toggleSidebar}/>
    </div>
    </nav>
    </>
  );
}

export default Navbar;
