import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = (props) => {
  
  // const [lightSwitchStatus, setLightSwitchStatus] = useState("off")
  
  // const [color, setColor ] = useState("white")

  // const flipTheSwitch = () => {
  //   if (lightSwitchStatus === "off") {
  //     setLightSwitchStatus("on")
  //     setColor("yellow")
  //   } else if (lightSwitchStatus === "on") {
  //     setLightSwitchStatus("off")
  //     setColor("white")
  //   }
  // }
  
  return (
    <>
      <body>
        <h1>Lightbulb <span>Challenge</span></h1>
        <LightSwitch />
        <LightSwitch />
        <LightSwitch />
      </body>
    </>
  )
}

export default App


// return (
  //   <>
  //     <h1>Lightbulb Challenge</h1>
  //     {lightSwitcher.map((item, index) => {
    //       return(
      //     <LightSwitch 
      //     lightSwitch={item} 
      //     flipTheSwitch= {flipTheSwitch} 
      //     index={index}
      //     />
      //   )
      //       })}
      //   </>
      // )
      // }
      // const [lightSwitcher, setLightSwitcher] = useState(["on", "off"])
      // const [lightSwitcher, setLightSwitcher] = useState([
      //   {switch: "on", button: false},
      //   {switch: "off", button: true}
      // ])
      
      // const flipTheSwitch = (flipped) => {
      //   lightSwitcher[flipped].button = true
      //   setLightSwitchStatus([...lightSwitcher, lightSwitchStatus])
      // }
      
      
      //   const flipTheSwitch = () => {
      //     const randomFlip = Math.floor(Math.random() * lightSwitcher.length)
      //     setLightSwitchStatus(lightSwitcher[randomFlip]) 
      // }
      
      // const flipTheSwitch = () => {
      //   setLightSwitchStatus("on")
      // }