// import ResCard from "./ResCard"
// // import mockData from '../utils/mockData'
// import { useEffect, useState } from "react"

// const Body = ()=>{

//    const[filterData ,setFilterData]= useState([])
//    const [originalData, setOriginalData] = useState([]);

// //   const filterD=()=>{
// //     console.log("btn clicked")
// //     let filterdData = filterData.filter((res)=>(
// //      res.avgRating > 4.0
// //    ))
// //    console.log(filterdData)
// //    setFilterData(filterdData)
// //  }

//   useEffect(()=>{
//     fetchData()
//   },[])

//   const fetchData = async ()=>{
//     const response =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//     const deta =  await response.json()
//     console.log(deta)
//     // setFilterData(data.)
//     // setFilterData(deta.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//     const restaurant = deta.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     setFilterData(restaurant)
//   }

//     return(
//         <div className="body-container ">
//            <div className="serarch-container">
//             <button className="filter-btn" onClick={()=>{
//               let topratedData = filterData.filter((res)=>(
//                 res.avgRating > 4.0
//               ))
//               setFilterData(topratedData)
//               console.log(topratedData)
//               console.log("btn clicked")
//             }

//             }>Filter top rated </button>
//            </div>
//            <div className="res-container">

//               {filterData.map((item)=>(
//                 <ResCard resData={item} key={item.id}/>
//               ))}

//            </div>
//         </div>
//     )
// }
// export default Body
// import ResCard from "./ResCard";
// import { useEffect, useState } from "react";
// import ShimmerCards from "./ShimmerCards";
// import { Link } from "react-router-dom";

// const Body = () => {
//   const [filterData, setFilterData] = useState([]);
//   const [searchFilter, setSearchFilter] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [originalData, setOriginalData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const response = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const data = await response.json();
//     const restaurants =
//       data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//     setFilterData(restaurants);
//     setSearchFilter(restaurants);
//     setOriginalData(restaurants);
//   };

//   const filterTopRated = () => {
//     const topRatedData = originalData.filter(
//       (res) => res.info?.avgRating > 4.0
//     );
//     setFilterData(topRatedData);
//   };

//   // if(filterData.length===0){
//   //   return (
//   //     <ShimmerCards/>
//   //   )
//   // }


 
//   return filterData.length === 0 ? (
//     <ShimmerCards />
//   ) : (
//     <div className="body-container">
//       <div>
//         <input
//           type="text"
//           placeholder="what you want"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         />
//         <button
//           onClick={() => {
//             const searchResult = filterData.filter((res) => {
//               return res.info?.name.toLowerCase().includes(searchText.toLowerCase());
//             });
//             setSearchFilter(searchResult);
//             setSearchText("")
//           }}>
//           Search
//         </button>
//       </div>
//       <div className="search-container">
//         <button className="filter-btn" onClick={filterTopRated}>
//           Filter top rated
//         </button>
//       </div>
//       <div className="res-container">
//         {searchFilter.map((item) => (
//          <Link to={"/restaurants/:"+item.info?.id} key={item.info?.id} ><ResCard resData={item} /></Link> 
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import ShimmerCards from "./ShimmerCards";
import { Link } from "react-router-dom";

const Body = () => {
  const [filterData, setFilterData] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const restaurants =
      data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setFilterData(restaurants);
    setSearchFilter(restaurants);
    setOriginalData(restaurants);
  };

  const filterTopRated = () => {
    const topRatedData = originalData.filter(
      (res) => res.info?.avgRating > 4.0
    );
    setFilterData(topRatedData);
    setSearchFilter(topRatedData);
  };

  const handleSearch = () => {
    const searchResult = originalData.filter((res) =>
      res.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchFilter(searchResult);
  };

  return filterData.length === 0 ? (
    <ShimmerCards />
  ) : (
    <div className="body-container">
      <div>
        <input
          type="text"
          placeholder="what you want"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="search-container">
        <button className="filter-btn" onClick={filterTopRated}>
          Filter top rated
        </button>
      </div>
      <div className="res-container">
        {searchFilter.map((item) => (
          // <Link to={"/restaurants/:" + item.info?.id} key={item.info?.id}>
          <Link to={`/restaurants/${item.info?.id}`} key={item.info?.id}>

            <ResCard resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
