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

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <section className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={`./images/${props.coverImg}`}
        alt="katie-zaferas"
        className="card-img"
      />
      <div className="card-content">
        <img src="./images/star.png" alt="rating-star" className="card-star" />
        <span>{props.rating} </span>
        <span className="card-rate"> ({props.reviewCount}) • </span>
        <span className="card-rate"> {props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price">
        <strong>From ${props.price} </strong>/ person
      </p>
    </section>
  );
}
