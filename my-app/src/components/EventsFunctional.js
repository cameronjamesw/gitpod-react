import React from 'react'

function EventsFunctional() {
    function clickHandler(){
        console.log("You clicked the event functional button!!")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click Me! - Functional Component</button>
    </div>
  )
}

export default EventsFunctional