// import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import INFINITYCART from '../assets/logos/infinity-cart.svg';
import INFINITYTEXT from '../assets/logos/infinity-text-logo.svg';
// import Img1 from '../assets/images/image-1.png';
// import Img2 from '../assets/images/image-2.png';
// import Img3 from '../assets/images/image-3.png';
// // import { useEffect } from 'react';
function Navbar() {
//   const imgScroll = [Img1, Img2, Img3];
//   const [currentImageIndex, setCurrentImageIndex] = useState = (0);

//   useEffect(() => {
//     const scrolling = setinterval (() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
//     }, 5000);
//     return() => {
//       clearInterval(scrolling)
//     }
//   }, []);

//   const currentImage = images[CurrentImageIndex]


  return (
    <>
    <nav className='flex items-center justify-evenly p-2 bg-purple-600'>
    <div className='flex gap-5'>
    <img src={INFINITYCART} alt='infinity-logo' className='h-12'/>
      <img src={INFINITYTEXT} alt='infinity-text' />
    </div>

      <ul className='flex gap-10 text-white '>
        <li><a>Services</a></li>
        <li><a>About Infinity</a></li>
        <li><a>Pricing</a></li>
        <li><a>Contact Us</a></li>
      </ul>

    <div>
    <button className= ' bg-gray-800 p-3 px-10 text-white rounded-lg'> Get Started </button>
    </div>
    

    </nav>
    </>
  );
}

export default Navbar;
