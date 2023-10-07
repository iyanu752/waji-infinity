import Lottie from 'lottie-react';
import animationData from '../assets/lottie/animation_lneq6d4t.json';
// import animationData2 from '../assets/lottie/animation_lneq6d4t.json'
function Animation () {
    return (
        <>
            <div className='flex justify-center'>
                <Lottie animationData = {animationData}
                    loop = {true}
                    autoplay = {true}
                    style = {{width:"500px", height:"500px"}}
                />

                
            </div>
        </>
    )
}

export default Animation;