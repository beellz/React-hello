import React from 'react';
import ReactDOM from 'react-dom';

// const name = "beellz";
// const age = 25;

// const year = CurrentDate.getFullYear();
// console.log(year);

// const upimage = "https://picsum.photos/200"
// const CustomColor = {
//   color: "red",
//   fontSize : "26px"
// }

// CustomColor.color = "green"
let customColor = {
  color : "yellow"
}

function Morning() {
  const CurrentDate = new Date();
  let curHr = CurrentDate.getHours()
  console.log(CurrentDate);
  if (curHr < 12){
    console.log("good morning")
    customColor.color = "blue"
    return "Good Morning"
    
  } else if (curHr < 18) {
    console.log("good afternoon")
    customColor.color = "green"
    return "Good Afternoon"
  }else {
    customColor.color = "purple"
    console.log('good evening')
    return "Good Evening"

  }
}



ReactDOM.render(
  <div>
    {/* <h1 className= "heading" spellCheck="false"> hello </h1>
    <p style={CustomColor}> created by {name}</p>
    <a href="tel:123-456-7890">123-456-7890</a>
<p> copyright {year}</p> */}

<h1 style={customColor} className="headingall">{Morning()}</h1>
 {/* <img src={upimage + "?grayscale"}/> */}
  </div>
  ,
  document.getElementById('root')
);


