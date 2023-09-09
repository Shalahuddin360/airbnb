import LivePlacesCard from "./LivePlacesCard";

const  LivePlacesData =async () => {
    const res = await fetch('http://localhost:3000/api/lives')
    const data = await res.json()
    
    return (
        <div className="">
         <div className= "flex space-x-3 overflow-scroll scrollbar-hide p-2">
         {  data?.map(item=><LivePlacesCard key={item.id} item={item}></LivePlacesCard>)}
         </div>
        </div>
    );
};

export default LivePlacesData;