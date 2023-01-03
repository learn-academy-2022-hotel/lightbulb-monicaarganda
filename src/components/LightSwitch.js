import React from "react"

const LightSwitch = (props) => {
  console.log('prop:', props)

  return (
    <>
      <div 
        className="lightbulb" 
        onClick={props.flipTheSwitch} 
        style={{backgroundColor: props.color}}
        >
      <h2>{props.lightSwitchStatus}</h2>
      </div>
    </>
  )
}

export default LightSwitch

// style={{backgroundColor: props.lightSwitchStatus === "off" ? 'white' : 'yellow'}}
// ? 'background-white' : 'background-yellow'}