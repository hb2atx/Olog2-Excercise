function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let firstZeroIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right)/2);

    if(arr[mid] === 0) {
        firstZeroIndex = mid;
        right = mid - 1;
    } else {
        left = mid + 1;
    }
  }
 
  return arr.length - firstZeroIndex - 1;
}

module.exports = countZeroes

//  Example 
// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

