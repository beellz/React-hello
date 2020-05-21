import React from 'react';
import ReactDOM from 'react-dom';

const name = "beellz";
const age = 25;
const CurrentDate = new Date();
const year = CurrentDate.getFullYear();
console.log(year);


ReactDOM.render(
  <div>

    <p> created by {name}</p>
<p> copyright {year}</p>
 
  </div>
  ,
  document.getElementById('root')
);


