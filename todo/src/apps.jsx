import React, { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time <= 0) return;

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div>
      <h2>Countdown Timer</h2>

      <input
        type="number"
        placeholder="Enter seconds"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => setTime(Number(input))}>
        Start
      </button>

      <h1>{time}</h1>
    </div>
  );
}

export default App;


