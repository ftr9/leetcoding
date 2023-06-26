/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height = []) {
  //check if there is poles or not
  if (height.length <= 1) {
    return 0;
  }

  let leftPoleIdx = 0;
  let rightPoleIdx = height.length - 1;
  let totalContainerLength = height.length - 1;
  let area = 0;
  while (leftPoleIdx <= rightPoleIdx) {
    //if two poles have same length decrement both left and riht index
    if (height[leftPoleIdx] === height[rightPoleIdx]) {
      area = calculateArea(area, totalContainerLength, height[rightPoleIdx]);
      leftPoleIdx++;
      rightPoleIdx--;
      totalContainerLength -= 2;
    } else {
      area = calculateArea(
        area,
        totalContainerLength,
        Math.min(height[leftPoleIdx], height[rightPoleIdx])
      );

      //check which pole is shorter
      if (height[leftPoleIdx] < height[rightPoleIdx]) {
        leftPoleIdx++;
      } else {
        rightPoleIdx--;
      }
      totalContainerLength--;
    }
  }

  return area;
};

console.log(maxArea([1, 1]));

function calculateArea(area, lengthContainer, breadthContainer) {
  return Math.max(area, lengthContainer * breadthContainer);
}
