import React from "react";
import { useMemo, useState, useEffect } from "react";
export default function App8() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(10);
  const calc = () => {
    console.log("called calc function")
    return <h1 style={{ color: "red" }}>{Date.now()}</h1>;
  };
  const result = useMemo(() => calc(), [flag]);
  return (
    <div>
      <h1>useMemo</h1>
      <hr></hr>
      {result}
      <h1 style={{ color: "blue" }}>{Date.now()}</h1>
      <h1 style={{ color: "blue" }}>{Math.random()}</h1>
      <button onClick={() => setCount(count + 1)}>useEffect:{count}</button>
      <button onClick={() => setFlag(flag + 1)}>useMemo:{flag}</button>
    </div>
  );
}
