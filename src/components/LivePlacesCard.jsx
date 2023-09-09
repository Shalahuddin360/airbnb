

const LivePlacesCard = ({item}) => {
    const {img,id,title} = item
    // console.log(id)
    return (
         <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out" >
               <div className="max-w-full mx-auto ">
                <img src={img} className="object-cover shadow-md rounded-lg" alt="img author" />
               </div>
                <div>
                    <h2 className="text-3xl ">{title}</h2>
                </div>
        </div>
    );
};

export default LivePlacesCard;