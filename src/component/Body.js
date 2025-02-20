import ResCard from "./ResCard";
import { useContext, useEffect, useState } from "react";
import ShimmerCards from "./ShimmerCards";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from '../utils/UserContext'

const Body = () => {
  const [filterData, setFilterData] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [originalData, setOriginalData] = useState([]);

  // const {setUserName}= useContext(UserContext)
  const {loggedInUser,setUserName} =useContext(UserContext)

  const onlineStatus = useOnline();
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
      console.log(data)
      console.log(restaurants)
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
    setSearchText("")
  };
  if (onlineStatus === false)
    return <h1>your offline please check your internet once</h1>;

  return filterData.length === 0 ? (
    <ShimmerCards />
  ) : (
    <div className="p-4 flex flex-col">
      <div className="mb-2 flex gap-3 ">
        <input
          className="p-1 border border-solid border-black"
          type="text"
          placeholder="what do you want"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-slate-400 px-2 py-1 rounded-sm	mx-2 text-amber-100	"
          onClick={handleSearch}>
          Search
        </button>
      
        <button className="bg-slate-500 rounded-lg px-3 py-1" onClick={filterTopRated}>
          Filter top rated
        </button>
        <div>
          <label htmlFor="">input:</label>
          <input className="border border-black rounded-lg mx-1" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>

        </div>
      
      </div>
      
      <div className="flex flex-wrap">
        {searchFilter.map((item) => (
          // <Link to={"/restaurants/:" + item.info?.id} key={item.info?.id}>
          <Link
            // to={`/restaurants/${item.info?.id}`}
            to ={"/restaurants/"+item.info?.id}
            key={item.info?.id}
            style={{ textDecoration: "none", color: "inherit" }}>
            <ResCard resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
