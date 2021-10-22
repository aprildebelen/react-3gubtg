import React from "react"; //import react library
import "./style.css"; //importing css style sheet

//Create a React component “Product” to display the following properties. Name, id, datePurchased,
//price

//Write a toString(…) method to concatenate the properties of the component “Product” defined in
//the activity 1, above.

const name = "iPhone 13";
const Id = "13/21324208";
const datePurchased = "22/10/2021";
const price = "£1,200";

function Product(props){
  return(
    <div>
      {props.Id}
      {props.name}
      {props.datePurchased}
      {props.price}
    </div>
  )


}

function toString(nm,id,dp,pr) {
  return nm + " " + id + " " + dp + " " + pr
}
