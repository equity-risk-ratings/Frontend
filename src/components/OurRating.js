import React from "react";
import RatingList from "./RatingList";
import TradeNav from "./TradeNav";

export default function OurRating() {
  return (
    <div className="ratings-home">
      <TradeNav />
      <h1>Company Rankings</h1>
      <h3>
        tireless research has allowed us to share with you our risk valuations
      </h3>
      <RatingList />
    </div>
  );
}
