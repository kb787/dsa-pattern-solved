function findCheater(arr, changeArr) {
  let i,
    j,
    cheaterElement,
    indexPositions = [],
    valuePositions = [];
  indexPositions = changeArr.map((item) => item[0]);
  valuePositions = changeArr.map((item) => item[1]);
  for (i = 1; i <= indexPositions.length; i++) {
    let changingPosition = indexPositions[i];
    arr[changingPosition] = valuePositions[i];
  }
  for (i = 1; i <= arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        cheaterElement = arr[j];
      }
    }
  }
  return cheaterElement;
}
let arr = [1, 1, 2, 3, 4];
let changingElements = [
  [1, 3],
  [4, 2],
];
let output = findCheater(arr, changingElements);
console.log(output);
