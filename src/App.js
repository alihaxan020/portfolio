import React, { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [minute, setMinute] = useState(0);
  if (count === 59) {
    setCount(0);
    setMinute(minute + 1);
  }
  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);
  return (
    <div className="App">
      <h3>Hi There! I am Ali Hassan</h3>
      <h5>Welcome to my Portfolio</h5>
      <p>This is under Development</p>
      <h5>Idle time</h5>
      <h5 style={{ fontSize: 25 }}>MM:SS</h5>
      <h5 style={{ fontSize: 50 }}>
        {minute <= 9 ? "0" : null}
        {minute}:{count <= 9 ? "0" : null}
        {count}
      </h5>
      <h1>Ali Hassan</h1>
    </div>
  );
}
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
export default App;
