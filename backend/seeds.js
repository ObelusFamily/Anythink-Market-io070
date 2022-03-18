const fetch = require("node-fetch");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

// seed database
const seed = async () => {
  for (let index = 42; index < 100; index++) {
    await fetch("http://localhost:3000/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzQ3NmVlMTI0YWRlM2NkODI3NDYzNSIsInVzZXJuYW1lIjoiZGFuaWVsIiwiZXhwIjoxNjUyNzg1ODg2LCJpYXQiOjE2NDc2MDU0ODZ9.piBBE3GXONWFP6sk9-sPHUyXTOhneRDQgjvhfoBCp0k",
      },
      body: JSON.stringify({
        item: {
          title: `seed-${index}`,
          description: "description description description",
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
};

seed();
