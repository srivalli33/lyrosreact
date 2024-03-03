import React from "react";

export default function App6() {
  const url = "https://jsonplaceholder.typicode.com/users";
  let users = [];

  fetch(url)
    .then((res) => res.json().then((data) => setData(data)))
    .catch((err) => console.log(err));

  const setData = (data) => {
    console.log(data)
  };
  return (
    <ol>
      <li>{users[0]}</li>
    </ol>
  );
}


// {users.map((v, i) => (
//   <li key={i}>{v.name}</li>
// ))}