var longestPalindrome = function (s) {
  let palindrome = '';
  let longestPalindrome = 0;

  let initialIndex = 0;

  while (initialIndex !== s.length - 1) {
    for (let i = s.length - 1; i > initialIndex; i--) {
      if (s[i] === s[initialIndex]) {
        const subStr = s.slice(initialIndex, i + 1);
        const reversedSubStr = subStr.split('').reverse().join('');
        if (reversedSubStr === subStr) {
          if (longestPalindrome < subStr.length) {
            longestPalindrome = subStr.length;
            palindrome = subStr;
          } else {
            break;
          }
        }
      }
    }
    initialIndex++;
  }

  if (longestPalindrome === 0) {
    return s[0];
  }

  return palindrome;
};
