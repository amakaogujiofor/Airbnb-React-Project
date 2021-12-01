import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import "./App.css";
import Data from "./Data";

export default function App() {
  const cards = Data.map((data) => {
    return (
      <Card
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
