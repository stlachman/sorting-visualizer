import React from "react";

export default function Item({ item, i, currentIndex }) {
  return (
    <div
      className={`item ${i === currentIndex ? "yellow" : "white"}`}
      style={{ height: `${Math.floor((item.value / 250) * 100)}%` }}
      key={i}
    ></div>
  );
}
