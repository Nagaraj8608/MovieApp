import { useState, useEffect } from "react";

// defination : State in a react is a plain javascript object used by react to repesent a piece of information about the component's current situation and it is completely managed by the component itself.

const State = () => {
  // state works by array destructuring concept
  const [counter, setCounter] = useState(0);

  // Useeffect allows us to do something or some kind of effect.
  useEffect(() => {
    // this code going to get run as soon as the page loads
    // alert("Reload");
    // counter = 100;
    // this above code throws error so never modify state manually since here counter is not a normal variable if we want to change the state use setCounter function which is its own set of fucntion to change the state 

    // to know everytime when a value changes on a button click we give alert 

    alert("You've changed the counter to " + counter)
  }, [counter]);
  return (
    <div className="App">
      {/* Let's create a counter with two buttons */}
      {/* Event: An event is an action can be triggered as a result of the user action or  some kind of a system generated event.. Eg. a mouse click or button press is an event*/}
      {/* In order to increase the count by one each time when we press button everytime so we create callback function inside the setCounter*/}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      {/* <button onClick={() => setCounter(counter - 1)}>-</button> */}
      {/* onclick function accepts a callback function . */}
      {/*  Callback function: A callback function is the one that simply doesnot have name and which waits for some kind a of command*/}
      <p>{counter}</p>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      {/* <button onClick={() => setCounter(counter + 1)}>+</button> */}
    </div>
  )
}

export default State;
