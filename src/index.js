import React from 'react';
import ReactDOM from 'react-dom';

const name = "beellz";
const age = 25;
const CurrentDate = new Date();
const year = CurrentDate.getFullYear();
console.log(year);

const upimage = "https://picsum.photos/200"
const CustomColor = {
  color: "red",
  fontSize : "26px"
}

CustomColor.color = "green"


ReactDOM.render(
  <div>
    <h1 className= "heading" contentEditable="true" spellCheck="false"> hello </h1>
    <p style={CustomColor}> created by {name}</p>
<p> copyright {year}</p>
 <img src={upimage + "?grayscale"}/>
  </div>
  ,
  document.getElementById('root')
);


