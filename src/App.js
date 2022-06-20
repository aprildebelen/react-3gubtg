import React from "react";    //import react library
import "./style.css";   //importing css style sheet

//Create a React component “MedicalTreatment.js”. Using the props parameters, add the following attributes for the component treatId, treatCourseId, type, category, name, startDate.

const treatId1 = "DIA2";
const treatCourseId1 = "Insulin";
const type1 = "Type 2";
const category1 = "Diabetes";
const name1 = "Mr. Webber";
const startDate1 = "27/11/2021";

function medicalTreatment(props){
  return(
    <div>
      {props.treatId} {props.treatCourseId} {props.type} {props.category} { props.name} {props.startDate}
    </div>
  )

}

//Write a toString(…) method to concatenate the properties of the component //“MedicalTreatment” 

function toString(ti,tc,ty,cg,nm,sd) {
  return ti + ", " + tc + ", " + ty + ", " + cg + ", " + nm + ", " + sd;
}

function clickHandler(){
  window.alert(toString(treatId1,treatCourseId1,type1,category1,name1,startDate1))
}

export default function medicalTreatment() {
return (
  <div>
    <medicalTreatment treatId={treatId1} treatCourseId={treatCourseId1} type={type1}
category={category1} name={name1} startDate={startDate1} />
  <button onClick={clickHandler}>
    Show Medical Treatment Record
    </button>
  </div>
);
}
