import React, { useEffect, useState } from 'react'
import Search from './Search'
import RestaurantCard from "./RestaurantCard"
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import RestaurantListCount from "./RestaurantListCount";
import FoodChoiceRadio from "./FoodChoiceRadio"
import RestaurantCardSkeleton from './RestaurantCardSkeleton';
import data from '../MockData/data.json'
import Skeleton from 'react-loading-skeleton';

const RestaurantBody = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filterListOfRestaurants, setFilterListOfRestaurants] = useState([]);
    const [searchText, setSearchText]=useState();
    const [isLoading, setIsLoading]=useState(true);



    const restaurantList = listOfRestaurants.length;
    const filterRestaurantList = filterListOfRestaurants.length;

    let data;
    let datajson;
    let apiData;

    const filterRestaurant = ()=> {
        let filterRestaurant = listOfRestaurants.filter((res)=> res.info.avgRating > 4.2);
        setFilterListOfRestaurants(filterRestaurant);
        setIsLoading(false);
    }
    const clearFilterRestaurant = () => {
        setFilterListOfRestaurants(listOfRestaurants);
    }

    const searchRestaurant = (e) => {
      setSearchText(e.target.value);
        if(searchText!==""){
            let searchRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText));
            setFilterListOfRestaurants(searchRestaurant);
        } else {
            setFilterListOfRestaurants(listOfRestaurants);
        }
        setIsLoading(false);
    }

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async() => {
        data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2307329&lng=72.856673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        datajson = await data.json();
        apiData = datajson.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      
        setListOfRestaurants(apiData);
        setFilterListOfRestaurants(apiData);
        setIsLoading(false);
    }

    const onGreet = (name) =>{
      alert("Hello!" +name);
    }

    const selectFoodChoice = (e) => {
      let foodChoiceRestaurant;
      let foodChoice = e.target.value;
      if(foodChoice!=="") {
        if(foodChoice=="veg") {
          foodChoiceRestaurant = listOfRestaurants.filter((listOfRest)=> listOfRest.info.hasOwnProperty("veg"));
        } else {
          foodChoiceRestaurant = listOfRestaurants.filter((listOfRest)=> !listOfRest.info.hasOwnProperty("veg"));
        }
        setFilterListOfRestaurants(foodChoiceRestaurant);
      }    
    }

  return (
    <div>
        <div className="filterContainer">
          <Search searchRestaurant={searchRestaurant} />
          <FoodChoiceRadio selectFoodChoice={selectFoodChoice} />
          
          <Col xs="auto btn-wrapper">
            <Button className="btn btn-basic" variant="light" onClick={filterRestaurant}>Top Rated Restaurants</Button>
            <Button className="btn btn-basic" variant="light" onClick={clearFilterRestaurant}>Clear Filter</Button>
          </Col>
        </div>
        <div className='restaurant-container'>

          {isLoading ? <div className="skeleton-container"><Skeleton className="restListCount-skeleton"></Skeleton></div> : <RestaurantListCount restCount={restaurantList} filterRestCount={filterRestaurantList}/>}
          {/* {isLoading && <Skeleton className="restListCount-skeleton"></Skeleton>} */}
          {/* <div className="skeleton-container"><Skeleton className="restListCount-skeleton"></Skeleton></div> */}
          {/* <Skeleton className="restListCount-skeleton"></Skeleton> */}
          {isLoading && <RestaurantCardSkeleton cards={8} />}
          {filterListOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} restData={restaurant} onGreet={onGreet}></RestaurantCard>)}
        </div>
    </div>
  )
}

export default RestaurantBody
