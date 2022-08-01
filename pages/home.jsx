import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Home = ({ user }) => {
  console.log(user.data.data);

  return (
    <main style={{ height: "100vh", flexGrow: "1" }}>
      {/* <Navbar /> */}
      <div
        style={{ height: "100vh", width: "100%", border: "1px solid white" }}
      >
        <h1>User name : {user.data.data.username}</h1>
        <h2>The name : {user.data.data.name}</h2>
        <p>id : {user.data.data.id}</p>
      </div>
    </main>
  );
};

export async function getStaticProps() {
  const instance = axios.create({
    // headers : {''}
  });
  const { data } = await axios.get(
    "https://api.twitter.com/2/users/by/username/kryptonSquirrel",
    {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );
  const user = JSON.parse(JSON.stringify({ data }));
  return {
    props: {
      user: user,
    },
  };
}

export default Home;
