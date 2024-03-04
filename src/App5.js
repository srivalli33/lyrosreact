import React from "react";

export default function App5() {
  let products = [
    { id: 1, name: "Product 1", price: 440, image: "/lyrosreact/images/1.PNG" },
    { id: 2, name: "Product 2", price: 560, image: "/lyrosreact/images/2.png" },
    { id: 3, name: "Product 3", price: 500, image: "/lyrosreact/images/3.png" },
    { id: 4, name: "Product 4", price: 100, image: "/lyrosreact/images/4.png" },
    { id: 5, name: "Product 5", price: 900, image: "/lyrosreact/images/5.png" },
    { id: 6, name: "Product 6", price: 900, image: "/lyrosreact/images/6.png" },
  ];
  return (
    <div>
      {products.map((e) => (
        <div key={e.id}>
          <div>
            <img src={e.image} />
          </div>
          <div>{e.name}</div>
        </div>
      ))}
    </div>
  );
}
