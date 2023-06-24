/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArr = [...nums1, ...nums2];
  const sortedMergedArr = mergedArr.sort((a, b) => a - b);
  if (sortedMergedArr.length % 2 === 0) {
    return (
      (sortedMergedArr[sortedMergedArr.length / 2 - 1] +
        sortedMergedArr[sortedMergedArr.length / 2]) /
      2
    );
  }

  const midValue = sortedMergedArr[Math.floor(sortedMergedArr.length / 2)];

  return midValue;
};
