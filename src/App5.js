import React from "react";

export default function App5() {
//   let names = ["John", "Cathy", "Mike"];
  let products = [
    {id:1,name:"Product 1",price:440},
    {id:2,name:"Product 2",price:560},
    {id:3,name:"Product 3",price:500},
    {id:4,name:"Product 4",price:100},
    {id:5,name:"Product 5",price:900},
  ]
  return (
    <ul>
      {products.map((e,i) => (
        <li key={i}>{e.name}-{e.price}</li>
      ))}
    </ul>
  );
}
