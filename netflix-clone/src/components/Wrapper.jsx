import React from "react";
import Movies from "./Movies";

function Wrapper() {
  return (
    <>
      <Movies title="Marvel" category="Trending Now" />
      <Movies title="Pokemon" category="Watch It Again" />
      <Movies title="Star Wars" category="New Relases" />
    </>
  );
}

export default Wrapper;
