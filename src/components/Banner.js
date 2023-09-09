import Image from "next/image";

const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 2xl:h-[700px]">
        <Image alt="bannerImg" objectFit="cover" layout="fill" src={"https://images.unsplash.com/photo-1671125239797-e731dae0accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}/>
         <div className="absolute top-1/2 w-full text-center">
            <p className="text-white text-sm sm:text-lg">Not sure where to go ? Perfect</p>
            <button className="bg-red-400 text-white px-10 py-4 shadow-md hover:shadow-2xl rounded-lg my-3 font-bold active:scale-90 transition duration-150">I am flexible</button>
         </div>
        </div>
    );
};

export default Banner;