import React from 'react'

const RestaurantListCount = (props) => {
    const {restCount, filterRestCount} = props;
    console.log(restCount+ "" +filterRestCount);
  return (
    <div class="showing-result-container">
      <p>showing {filterRestCount} of {restCount}</p>
    </div>
  )
}

export default RestaurantListCount
