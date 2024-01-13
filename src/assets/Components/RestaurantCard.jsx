import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const RestaurantCard = (props) => {
    const {restData} = props;
    console.log(props);
    const {id, cloudinaryImageId, name, costForTwo, avgRatingString, locality, sla} = restData.info;
    
  return (
    <Card style={{ width: '18rem' }}>
      <div className="img-container">
        <Card.Img variant="top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} height="250" width="100"/>
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {costForTwo}
        </Card.Text>
        <Card.Text class="rating-container"><span className="rating-icon"></span>{avgRatingString}<span className="period-span"> . </span>{sla.slaString}</Card.Text>
        <Card.Text className="res-location">{locality}</Card.Text>
        <Button variant="info">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default RestaurantCard
