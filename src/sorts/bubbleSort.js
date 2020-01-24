export function bubbleSort(
  curItem,
  loopCount,
  items,
  swapCount,
  setItems,
  setSwapCount,
  setCurItem,
  setIsRunning,
  setSorted,
  setLoopCount,
  swap
) {
  if (curItem !== items.length - 1 - loopCount) {
    let curItems = [...items];
    //compare cur to next value (assuming not at the end)
    if (curItems[curItem].value > curItems[curItem + 1].value) {
      setItems(swap(curItem, curItem + 1, curItems));
      setSwapCount(swapCount + 1);
    }
    setCurItem(curItem + 1);
  } else {
    if (swapCount > 0) {
      setSwapCount(0);
    } else {
      setIsRunning(false);
      setSorted(true);
    }
    setCurItem(0);
    setLoopCount(loopCount + 1);
  }
}
