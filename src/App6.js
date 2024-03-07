import React from "react";
import { useState, useEffect } from "react";

// export default function App6() {
//   const [runs, setRuns] = useState(0);
//   const [wickets, setWickets] = useState(0);
//   console.log("Component loaded");
//   useEffect(() => {
//     console.log("Better Luck Next Time!");
//   },[wickets]);
//   return (
//     <>
//       <button onClick={() => setRuns((prevState) => prevState + 1)}>
//         Runs({runs})
//       </button>
//       <button onClick={() => setWickets((prevState) => prevState + 1)}>
//         Wickets({wickets})
//       </button>
//     </>
//   );
// }


///////////////

// export default function App6() {
//   const [count, setCount] = useState(0);
//   console.log("Component loaded");
//   return (
//     <>
//       <button onClick={() => setCount((prevState) => prevState + 1)}>
//         Click
//       </button>
//       <span>{count}</span>
//     </>
//   );
// }

///////////////
export default function App6() {
  const [count, setCount] = useState(0);
  console.log("Component loaded");
  return (
    <>
      <button onClick={() => setCount((prevState) => 5)}>Click</button>
      <span>{count}</span>
    </>
  );
}
///////////////
