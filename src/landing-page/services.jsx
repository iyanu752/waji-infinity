  import largelight from "../assets/images/large-light.png";
  import smalllight from "../assets/images/small-light.png"; 
  import largewoman from "../assets/images/large-woman.png";
  import smallwoman from "../assets/images/small-woman.png";
  import largeman from "../assets/images/large-man.png";
  import smallman from "../assets/images/small-man.png";

  function Services () {
    return (
        <div className="p-5">
        <div className="flex flex-col">
            <h1 className="text-center p-5 my-5 font-bold text-4xl"> OUR SERVICES </h1>


            <div className="flex lg:flex-row  items-center gap-36 mt-10">

                <div className="hidden lg:flex  p-20">
                    <img src= {largelight} alt='large-light' className="relative rounded-lg"/>
                    <img src = {smalllight} alt='small-light' className="absolute w-52 left-96 mt-32 "/>
                </div>

                <div className="lg:w-1/3 items-center flex flex-col justify-center">
                    <h1 className="text-center my-5 font-bold text-2xl">Extensive Product Catalouge</h1>

                    <div className="flex lg:hidden  px-20">
                    <img src= {largelight} alt='large-light' className="relative rounded-lg"/>
                    <img src = {smalllight} alt='small-light' className="absolute w-24 left-64 mt-32 "/>
                    </div>

                    <p className=" text-center my-5">
                    Discover a powerful platform that empowers you to turn your business dreams into reality. 
                    Join a community of ambitious sellers and unlock your full potential.
                    </p>
                    <button className="mt-4 bg-purple-500 hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-110 text-white font-bold py-2 px-4 rounded"> Learn More </button>
                </div>
                    
            </div>

            <div className=" flex lg:flex-row-reverse items-center gap-36 mt-10">

            <div className="hidden lg:flex p-20">
                    <img src= {largewoman} alt='small-light' className="relative rounded-lg"/>
                    <img src = {smallwoman} alt='small-light' className=" absolute w-52 right-96 mt-32"/>
                </div>

                <div className="lg:w-1/3 items-center flex flex-col justify-center">
                    <h1 className="text-center my-5 font-bold text-2xl">Elevate Your Brand, Captivate Your Customers</h1>

                    <div className="flex lg:hidden px-20">
                    <img src= {largewoman} alt='small-light' className="relative rounded-lg"/>
                    <img src = {smallwoman} alt='small-light' className=" absolute w-24 right-64 mt-32"/>
                    </div>

                    <p className="text-center my-5">
                    Stand out from the competition with our platform's powerful branding and marketing capabilities. 
                    Create a captivating brand identity that resonates with your target audience and drives customer loyalty.
                    </p>
                    <button className="mt-4 bg-purple-500 hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-110 text-white font-bold py-2 px-4 rounded"> Learn More </button>
                </div>
            
            </div>


            
            <div className="flex lg:flex-row  items-center gap-36 mt-10">

                <div className=" hidden lg:flex p-20">
                     <img src= {largeman} alt='small-light' className="relative rounded-lg"/>
                    <img src = {smallman} alt='small-light' className="absolute w-52 left-96 mt-32"/>
                </div>

                <div className="lg:w-1/3 items-center flex flex-col justify-center">
                    <h1 className="text-center my-5 font-bold text-2xl">Personalized Support, Unparalleled Success</h1>
                    <div className=" flex lg:hidden px-20">
                     <img src= {largeman} alt='small-light' className="relative rounded-lg"/>
                    <img src = {smallman} alt='small-light' className="absolute w-24 left-64 mt-32"/>
                    </div>
                    <p className=" text-center my-5">
                    We're more than just a platform.
                    Our dedicated support team is here to guide you every step of the way, 
                    nsuring your success and helping you overcome any obstacles.
                    </p>
                    <button className="mt-4 bg-purple-500 hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-110 text-white font-bold py-2 px-4 rounded"> Learn More </button>
                </div>
                    
            </div>

           

        </div>
        </div>
    )
}

export default Services;
