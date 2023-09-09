import Image from "next/image";

const LargeCard = ({img,title,description,buttonText}) => {
    return (
        <section className="relative py-7">
            <div className="relative h-96 min-w-[300px]">
            <Image src={img} layout="fill" className="rounded-lg" alt="largeImage" />
            </div>
            <div className="absolute font-semibold  left-16  text-white top-16">
                <h3 className="text-5xl mb-2">{title}</h3>
                <p className="">{description}</p>
                <button className="test-sm bg-red-400 px-6 py-4 mt-4 rounded-md text-white active:scale-90 transition-transform duration-150">{buttonText}</button>
            </div>
        </section>
    );
};

export default LargeCard;