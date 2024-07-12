
import { IMAGE_ID } from "../utils/constance";
const ResCard = (props) => {
  const { resData } = props;
  // const {info}=resData
  const { name, avgRating, cuisines,cloudinaryImageId } = resData?.info
 
  return (
    <div className="res-card">
       <img
        src={IMAGE_ID +cloudinaryImageId}
        alt="food"
        className="res-log"
      />
      <h3>{name}</h3>
      <h6>{avgRating}</h6>
      <h6>{cuisines.join(', ')}</h6>
    </div>
  );
};

export default ResCard;
