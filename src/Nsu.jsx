import React from "react";

function Nsu() {
  const CurrTime = new Date ().toLocaleTimeString()
  let wish=""
  if (CurrTime<"12:00:00") {
    wish = "Morning"
  } else if(CurrTime>="12:00:00" && CurrTime < "17:00:00") {
    wish = "Afternoon"
  } else if(CurrTime>="17:00:00" && CurrTime < "19:00:00") {
    wish = "Evening"
  }else if(CurrTime>="19:00:00" && CurrTime < "23:59:59") {
    wish = "Night"
  }else {
    console.log("Invalid");
  }
  return (
    <>


  // console.log(CurrTime);
 
      
      <h1>Hello Sir! Good {wish}</h1>
      <ul>
        <li>muskan</li>
        <li>hjhgji</li>
        <li>Baishnavi</li>
      </ul>
    </>
  );
}
export default Nsu;
