import React from 'react'
import Form from 'react-bootstrap/Form';

const FoodChoiceRadio = (props) => {
    const selectFoodChoice = props.selectFoodChoice;

  return (
    <Form>
            <Form.Check // prettier-ignore
              type="radio"
              id="food-choice-veg"
              label="Veg"
              value="veg"
              name="group1"
              onChange={selectFoodChoice}
            />
            <Form.Check // prettier-ignore
              type="radio"
              id="food-choice-nonveg"
              label="Non-Veg"
              value="non-veg"
              name="group1"
              onChange={selectFoodChoice}
            />
          </Form>
  )
}

export default FoodChoiceRadio
