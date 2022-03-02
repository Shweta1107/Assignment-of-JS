import React from "react";
import Tab from './Tab'

function Tabs({tabNames}) {
  console.log(tabNames)
  return (

    <div className="tabs" >
       {
         tabNames.map((tabName,index) => (
            <Tab  key={index} tabName={tabName} />
         ))
       }
    </div>
  );
}
export default Tabs;
