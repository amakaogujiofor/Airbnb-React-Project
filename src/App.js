import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import "./App.css";
import Data from "./Data";

export default function App() {
  const cards = Data.map((data) => {
    return <Card key={data.id} {...data} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
