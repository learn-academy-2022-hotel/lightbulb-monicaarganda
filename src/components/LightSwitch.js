import React, { useState } from "react";
import lightOff from "../assets/lightOff.png";
import lightOn from "../assets/lightOn.png";
import switchOff from "../assets/switchOff.png";
import switchOn from "../assets/switchOn.png"

const LightSwitch = (props) => {
  // console.log('prop:', props)

  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")
  
  const [color, setColor ] = useState("white")

  const flipTheSwitch = () => {
    if (lightSwitchStatus === "off") {
      setLightSwitchStatus("on")
      setColor("#faec57")
    } else {
      setLightSwitchStatus("off")
      setColor("#ffffff")
    }
  }
  
  return (
    <>
    <div>
        <img src={lightSwitchStatus === "off" ? switchOff : switchOn} onClick={flipTheSwitch}/>
        <img src={lightSwitchStatus === "off" ? lightOff : lightOn}/>
      </div>
    </>
  )
}

export default LightSwitch

      // <div 
      //   className="lightbulb" 
      //   onClick={flipTheSwitch} 
      //   style={{backgroundColor: color}}
      //   >
      // <h2>{lightSwitchStatus}</h2>
      // </div>
// const [lightSwitchStatus, setLightSwitchStatus] = useState("switchOff")
  
//   const [color, setColor ] = useState("lightOff")

//   const flipTheSwitch = () => {
//     if (lightSwitchStatus === "switchOff") {
//       setLightSwitchStatus("switchOn")
//       setColor("lightOn")
//     } else {
//       setLightSwitchStatus("switchOff")
//       setColor("lightOff")
//     }

{/* <img src={lightOff} alt="lightOff" width="200px"
height="200px"/>
<img src={lightOn} alt="lightOn" width="200px"
height="200px"/> 
<img src={switchOff} alt="switchOff" width="200px"
height="200px"/>
<img src={switchOn} alt="switchOn" width="200px"
height="200px"/> */}
// style={{backgroundColor: props.lightSwitchStatus === "off" ? 'white' : 'yellow'}}
// ? 'background-white' : 'background-yellow'}
// return (
//   <>
//     <div 
//       className="lightbulb" 
//       onClick={props.flipTheSwitch} 
//       style={{backgroundColor: props.color}}
//       >
//     <h2>{props.lightSwitchStatus}</h2>
//     </div>
//   </>
// )
// }
