function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
     // If the array is already sorted, the first element is the minimum
    if(arr[left] <= arr[right]) {
        return left;
    }

    let mid = Math.floor((left + right)/2);
    let next = (mid + 1) % arr.length; // Index of the next element from mid

    // Check if the next element is the smallest, indicating the rotation count
    if(arr[mid] <= arr[next] && arr[mid] <= arr[mid -1]) {
        return mid;
    }

    if (arr[mid] <= arr[right]) {
        right = mid - 1; // Search the left side
    } else {
        left = mid + 1; // Search the right side
    }
  }
  return 0; // If the array is not rotated, return 0
}

module.exports = findRotationCount