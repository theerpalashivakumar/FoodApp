
const ResCard = (props) => {
  const { resData } = props;
  // const {info}=resData
  const { name, avgRating, cuisines } = resData?.info
 
  return (
    <div className="res-card">
       {/* <img
        src={`https://res.cloudinary.com/demo/image/upload/${cloudinaryImageId}`}
        alt="food"
        className="res-log"
      /> */}
      <h3>{name}</h3>
      <h5>{avgRating}</h5>
      <h5>{cuisines.join(', ')}</h5>
    </div>
  );
};

export default ResCard;
