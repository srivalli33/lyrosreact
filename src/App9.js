import React from "react";
import { useMemo, useState, useEffect } from "react";
export default function App9() {
  const [data, setData] = useState(0);
  const [user, setUser] = useState(0);
  
  const [result, setResult] = useState();
  setResult(a + b);
  const getA = () => {
    console.log("getA is called");
    setA(Math.round(Math.random() * 10))
  };
  const calc = () => {
    return a + b;
  };

  const v1 = useMemo(() => getA(), [a]);
  const v2 = useMemo(() => calc(), [b]);

  return (
    <div>
      <h1>useMemo</h1>
      <hr></hr>
      A:{v1}
      B:{b}
      Result:{v1 + b}
      <button onClick={() => calc("a is updated")}>Change A</button>
      <button onClick={() => setB(Math.round(Math.random() * 10))}>Calc</button>
    </div>
  );
}
