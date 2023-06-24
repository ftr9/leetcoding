/**
 *  Longest Substring Without Repeating Characters
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let nonRepeatLongStr = 0;

  //for all same elements in array
  const set = new Set(s);
  if (set.size === 0) {
    return 0;
  }
  if (set.size === 1) {
    return 1;
  }
  const strLen = s.length;
  for (let i = 0; i < strLen; i++) {
    let tempString = s[i];

    for (let j = i; j < strLen; j++) {
      //why to check of same element
      if (i !== j) {
        tempString += s[j];
        //check if there is duplicate
        if (IsNotDuplicate(tempString)) {
          //update longest substring
          nonRepeatLongStr =
            nonRepeatLongStr < tempString.length
              ? tempString.length
              : nonRepeatLongStr;
        } else {
          break;
        }
      }
    }
  }

  return nonRepeatLongStr;
};

const IsNotDuplicate = s => {
  const set = new Set(s);
  if (set.size !== s.length) {
    return false;
  }
  return true;
};
