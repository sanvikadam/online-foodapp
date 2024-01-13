import React, { useEffect, useState } from 'react'
import Search from './Search'
import RestaurantCard from "./RestaurantCard"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import RestaurantListCount from "./RestaurantListCount";
import data from '../MockData/data.json'

const RestaurantBody = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filterListOfRestaurants, setFilterListOfRestaurants] = useState([]);
    const [searchText, setSearchText]=useState();

    const restaurantList = listOfRestaurants.length;
    console.log("Hello" +restaurantList);

    const filterRestaurantList = filterListOfRestaurants.length;
    console.log("filter" +filterRestaurantList);

    let data;
    let datajson;
    let apiData;

    const filterRestaurant = ()=> {
        let filterRestaurant = listOfRestaurants.filter((res)=> res.info.avgRating > 4.2)
        console.log(filterRestaurant);
        setFilterListOfRestaurants(filterRestaurant);
    }
    const clearFilterRestaurant = () => {
        setFilterListOfRestaurants(listOfRestaurants);
    }

    const searchRestaurant = (e) => {
      setSearchText(e.target.value);
      console.log(searchText);
        if(searchText!==""){
            let searchRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText));
            setFilterListOfRestaurants(searchRestaurant);
        } else {
            setFilterListOfRestaurants(listOfRestaurants);
        }
        
    }

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async() => {
        data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2307329&lng=72.856673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        datajson = await data.json();
        apiData = datajson.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log(apiData);
        setListOfRestaurants(apiData);
        setFilterListOfRestaurants(apiData);
    }

  return (
    <div>
        <div className="filterContainer">
        {/* <Search></Search> */}

        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={searchText}
              onChange={searchRestaurant}
              // onChange={(e)=> {
              //   setSearchText(e.target.value);
              //   // console.log(searchText)
              //   searchRestaurant;
              // }}
            />
          </Col>
          <Col xs="auto">
            <Button type="button" onClick={searchRestaurant}>Submit</Button>
          </Col>
        </Row>
        </Form>


        <Col xs="auto btn-wrapper">
        <Button variant="primary" onClick={filterRestaurant}>Top Rated Restaurants</Button>
        <Button variant="primary" onClick={clearFilterRestaurant}>Clear Filter</Button>
        </Col>
        </div>
        <div className='restaurant-container'>

        <RestaurantListCount restCount={restaurantList} filterRestCount={filterRestaurantList}/>
        {filterListOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} restData={restaurant}></RestaurantCard>)}
        </div>
    </div>
  )
}

export default RestaurantBody
