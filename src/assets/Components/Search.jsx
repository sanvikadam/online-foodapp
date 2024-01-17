import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Search = (props) => {
  const searchRestaurant = props.searchRestaurant;
  
  const [searchText, setSearchText]=useState();
  return (
    <div>
      <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={searchText}
              onChange={searchRestaurant}
            />
          </Col>
          <Col xs="auto">
            <Button type="button" onClick={searchRestaurant}>Submit</Button>
          </Col>
        </Row>
        </Form>
    </div>
  )
}

export default Search
