function Body() {
    return (
        <>
            <div className="flex flex-col  items-center justify-center mt-40 mb-10 text-center">
                    <h1 className="text-5xl font-extrabold">
                        Shop like a pro, all-in-one-platform
                    </h1>
                    <p className="mt-10 w-3/4 lg:w-1/3 text-center">
                        Welcome to INFINITY MARKET PLACE,
                        where you can effortlessly explore a wide range of services and products all in one convenient spot,
                        revolutionizing your shopping journey.
                    </p>

                    <div className="flex flex-row mt-10 gap-20 justify-center">
                        <button className="p-4 bg-purple-500 rounded-2xl hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-110">Get Started</button>
                        <button className="p-4 bg-gray-700 rounded-2xl text-white hover:bg-gray-950 transition duration-300 ease-in-out transform hover:scale-110">Learn More</button>
                    </div>
            </div>

        </>
    )
}
export default Body;