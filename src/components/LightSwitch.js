import React, { useState } from "react"

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
      <div 
        className="lightbulb" 
        onClick={flipTheSwitch} 
        style={{backgroundColor: color}}
        >
      <h2>{lightSwitchStatus}</h2>
      </div>
    </>
  )
}

export default LightSwitch

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