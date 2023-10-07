import shoppingCart from '../assets/lottie/animation_lnero6gg.json';
import serviceLottie from '../assets/lottie/animation_lneu3lhe.json'
import Lottie from 'lottie-react';

function MARKET() {
    return (
        <>
            <div className="flex flex-col  bg-purple-500">
                <h1 className="text-center p-5 font-bold text-4xl text-white"> THE MARKET </h1>
    
                    <div className="flex lg:flex-row flex-col items-center justify-center py-20 mt-10 lg:gap-40 gap-5">
                        <div>
                            <Lottie animationData = {shoppingCart}
                            loop = {true}
                            autoplay = {true}
                            style = {{width:"300px", height:"300px"}}
                            />        
                        </div>
                         <div className= 'w-2/3 lg:w-1/5 flex flex-col items-center text-white'>
                                <h2 className='font-bold text-2xl mb-5'>INFINITY PRODUCT PALACE</h2>
                                <span>
                                    Check out our product showcase,
                                    where we bring you the latest and greatest products in a laid-back and informative way!
                                </span> 
                                <div className='lg:mr-52 items-center'>
                                <button className="p-3  bg-gray-700 rounded-lg text-white mt-5">BUY/SELL</button>
                                </div>
                        </div>             
                    </div>
            </div>


            <div className='flex flex-col  bg-purple-500'>
                <div className="flex lg:flex-row flex-col items-center py-40 justify-center mt-10 lg:gap-40 gap-5">
                            <div>
                                <Lottie animationData = {serviceLottie}
                                loop = {true}
                                autoplay = {true}
                                style = {{width:"300px", height:"300px"}}
                                />        
                            </div>
                            <div className= 'w-2/3 lg:w-1/5 flex flex-col items-center text-white'>
                                    <h2 className='font-bold text-2xl mb-5'>INFINITY SERVICE PALACE</h2>
                                    <span>
                                    Check out our product showcase,
                                     where we bring you the latest and greatest products in a laid-back and informative way!
                                    </span> 
                                    <div className='lg:mr-52 items-center'>
                                    <button className="p-3  bg-gray-700 rounded-lg text-white mt-5">BUY/SELL</button>
                                    </div>
                                    
                            </div>             
                        </div>
            </div>
           

        </>
    )
}

export default MARKET;