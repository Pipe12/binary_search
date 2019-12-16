//Function for Binary Search

function binarySearch(array, numberToFind) {
  console.log(array, numberToFind);
  var startPivot = 0;
  var endPivot = array.length - 1;
  console.log(endPivot);
  while(startPivot <= endPivot) {
    var midPoint = Math.floor((startPivot + endPivot)/ 2);
    console.log(midPoint);
    if (array[midPoint] == numberToFind) {
      return midPoint;
    } else if (array[midPoint] > numberToFind) {
      endPivot = midPoint - 1;
    } else {
      startPivot = midPoint + 1;
    }
  }
  return notFound;
}

//Set variables

const familyAge = [3, 28, 38, 59, 65];
const ageToFind = 3;
const notFound = "Number is not found";

//linear program

const answer = binarySearch(familyAge, ageToFind);

if (answer == notFound) {
  console.log(answer)
} else {
  console.log("The number is in " + answer + " position");
}
