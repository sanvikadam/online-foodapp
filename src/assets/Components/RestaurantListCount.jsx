import React from 'react'
import Skeleton from 'react-loading-skeleton';

const RestaurantListCount = (props) => {
    const {restCount, filterRestCount} = props;
  return (
    <div className="showing-result-container">
      <p>showing {filterRestCount} of {restCount}</p>
    </div>
  )
}

export default RestaurantListCount
