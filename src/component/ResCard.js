
import { IMAGE_ID } from "../utils/constance";
const ResCard = (props) => {
  const { resData } = props;
  // const {info}=resData
  const { name, avgRating, cuisines,cloudinaryImageId,aggregatedDiscountInfoV3 } = resData?.info
 
  return (
    <div className="bg-slate-300 p-3 rounded-lg mr-2 mb-2 w-[300px] h-[330px] shadow-sm ">
       <img
        src={IMAGE_ID +cloudinaryImageId}
        alt="food"
        className="w-[100%] h-[200px] rounded-lg"
      />
      <span className=" bg-black bg-opacity-70  text-white p-1 rounded" style={{position:"relative", top:"-30px", left:"8px"}}>{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</span>
      <h3 className="mt-0 font-bold font-sans">{name}</h3>
      <h6>{avgRating}</h6>
      <h6>{cuisines.join(', ')}</h6>
    </div>
  );
};


// these id HOC FUNCTION THESE IS PROCTICE PERPOSE THESE FUNCTION TAKES ANOTHER COMPONENT AS A AGUMENT AND RETURN THE NEW COMPONENT THESEE IS CALLED HOC OR PURE FUNCTION IN REACT IT DOESN'T CHANGE THE TAKING COMPONENT JUST INHANCE THE COMPONENT FUTURE THESE IS CALLED THE HOC ARE PURE FUNCTION
export const resCardWithPromoted = (ResCard)=>{

  return() => {
    return(
      <div>
        <h1> hello </h1>
      </div>
    )
  }
}

export default ResCard;


