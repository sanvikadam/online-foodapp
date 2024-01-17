import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const RestaurantCardSkeleton = ({cards}) => {
  return (
    Array(cards).fill(0).map((_,index)=> <div className='card-skeleton'>
    <Card key={index} style={{ width:'18rem'}}>
  <div className="img-container">
  <SkeletonTheme key={index} baseColor="#ebebeb" highlightColor="#f5f5f5" enableAnimation="true" direction="ltr" duration={10}>
    <Skeleton key={index} width={286} height={300} style={{verticalAlign: "top"}} />
    </SkeletonTheme>
  </div>
  <Card.Body>
    <Skeleton count={4}></Skeleton>
    <Skeleton height={37} width={110}></Skeleton>
    <Skeleton height={37} width={110}></Skeleton>
  </Card.Body>
</Card>
</div>)
    
  )
}

export default RestaurantCardSkeleton
