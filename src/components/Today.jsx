import React, { useState } from "react";

function Today (){
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date('date string');
  var dayName = days[d.getDay()];

const [today,setDay] = useState(dayName)
  //======today======

function handleChange(event){
const num = event.target.value;

setDay(()=>{
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date(num);
  var dayName = days[d.getDay()];
  return(
    dayName
  )
})
}
return (<div>
<h2> Enter Date here </h2>
<p>like: 03 november 2020</p>
<h1>{today}</h1>
<form action="/">

<input onChange ={handleChange} name="num1" type="text" />

</form>

</div>)

}

export default Today;