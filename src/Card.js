import React from "react";

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
  return (
    <section className="card-container">
      <img
        src="./images/katie-zaferes.png"
        alt="katie-zaferas"
        className="card-img"
      />
      <div className="card-content">
        <img src="./images/star.png" alt="rating-star" className="card-star" />
        <span> 5.0 </span>
        <span className="card-rate"> (6) • </span>
        <span className="card-rate"> USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <strong>From $136 </strong>/ person
      </p>
    </section>
  );
}
