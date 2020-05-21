import React from 'react';
import ReactDOM from 'react-dom';

const name = "beellz";
const age = 25;


ReactDOM.render(
  <div>
  <h1> hello world</h1> 
  <ul>
    <li>life is short </li>
    <li>so work for it </li>
  </ul>
<h2> My Name is {name}</h2>
<h2> my Age is {age}</h2>

  </div>
  ,
  document.getElementById('root')
);


