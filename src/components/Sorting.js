import React, { useState } from "react";
import Item from "./Item";
import useInterval from "../hooks/useInterval";
import { bubbleSort } from "../sorts/bubbleSort";

function randomArray(length) {
  let result = [];

  for (let i = 0; i < length; i++) {
    result.push({
      value: Math.floor(Math.random() * length * 10),
      bg: "white"
    });
  }

  return result;
}

function swap(index1, index2, array) {
  let newArray = [...array];
  // swap values
  [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
  return newArray;
}

export default function Sorting() {
  const [items, setItems] = useState(randomArray(25));
  const [isRunning, setIsRunning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swapCount, setSwapCount] = useState(0);
  const [loopCount, setLoopCount] = useState(0);
  const [sorted, setSorted] = useState(false);

  const toggleAnimation = () => {
    setIsRunning(!isRunning);
    //Starts with the first two items being selected
  };

  const reset = () => {
    setSorted(false);
    setItems(randomArray(25));
    setCurrentIndex(0);
    setSwapCount(0);
    setLoopCount(0);
  };

  useInterval(
    () => {
      bubbleSort(
        currentIndex,
        loopCount,
        items,
        swapCount,
        setItems,
        setSwapCount,
        setCurrentIndex,
        setIsRunning,
        setSorted,
        setLoopCount,
        swap
      );
      // if (currentIndex !== items.length - 1 - loopCount) {
      //   let currentIndexs = [...items];
      //   //compare cur to next value (assuming not at the end)
      //   if (currentIndexs[currentIndex].value > currentIndexs[currentIndex + 1].value) {
      //     setItems(swap(currentIndex, currentIndex + 1, currentIndexs));
      //     setSwapCount(swapCount + 1);
      //   }
      //   setCurrentIndex(currentIndex + 1);
      // } else {
      //   if (swapCount > 0) {
      //     setSwapCount(0);
      //   } else {
      //     setIsRunning(false);
      //     setSorted(true);
      //   }
      //   setCurrentIndex(0);
      //   setLoopCount(loopCount + 1);
      // }
    },
    isRunning ? 25 : null
  );

  return (
    <div>
      <h1>Sorting Viz</h1>
      {!sorted && (
        <button onClick={toggleAnimation}>
          {isRunning ? "Stop" : "Start"}
        </button>
      )}

      {sorted && <button onClick={reset}>Generate new array</button>}

      <div className="container">
        {items.map((item, i) => {
          return <Item item={item} i={i} currentIndex={currentIndex} />;
        })}
      </div>
    </div>
  );
}
