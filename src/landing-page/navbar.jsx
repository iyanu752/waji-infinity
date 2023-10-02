import INFINITYCART from '../assets/infinity-logo.svg'
import INFINITYTEXT from '../assets/infinity-text-logo.svg'
function Navbar () {
    return(
        <>
            <div className="flex flex-row justify-between items-center">
            {/* {this is for the image} */}
            <div className='flex p-4 gap-2'>
                <img src={INFINITYCART} className='bg-black'/>
                <img src={INFINITYTEXT} className='bg-black hidden lg:flex' />
            </div>
                <ul className="hidden lg:flex gap-5 pr-5">
                    <li><a>Home</a></li>
                    <li><a>Services</a></li>
                    <li><a>About</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Login</a></li>
                </ul>
            </div>
            <div className="border-t border-slate-100 border-2 w-full mb-5"></div>
        </>
    )
}

export default Navbar