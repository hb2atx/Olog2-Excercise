function findFloor(arr, num){
    if (low > high) return -1;
    if (num >= arr[high]) return arr[high];

    let mid = Math.floor((low + high)/2)

    if (arr[mid] === num) return arr[mid];

    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]){
        return arr[mid - 1];
    }
    if (num < arr[mid]) {
        return findFloor(arr, num, low, mid - 1);
    }
    return findFloor(arr, num, mid + 1, high)
}

module.exports = findFloor

// function findFloor(arr, val) {
//   let left = 0;
//   let right = arr.length - 1;
//   let leftIdx = -1;

//   while (left <= right) {
//     let mid = Math.floor((left + right)/2);

//     if (arr[mid] === num) {
//         leftIdx = mid;
//         right = mid - 1;
//     } else if (arr[mid] < num){
//         left = mid + 1;
//     } else {
//         right = mid - 1;
//     }
//   }
//   return leftIdx;
// }

// function findRightIndex(arr, num) {
//     let left = 0;
//     let right = arr.length - 1;
//     let rightIndex = -1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === num) {
//             rightIndex = mid;
//             left = mid + 1; // Continue searching towards the right
//         } else if (arr[mid] < num) {
//             left = mid + 1; // Move towards the right
//         } else {
//             right = mid - 1; // Move towards the left
//         }
//     }

//     return rightIndex;
// }

// function sortedFrequency(arr, num) {
//     const leftIndex = findLeftIndex(arr, num);
//     const rightIndex = findRightIndex(arr, num);

//     if (leftIndex === -1 || rightIndex === -1) {
//         return 0;
//     }

//     return rightIndex - leftIndex + 1;
// }
// const arr = [1, 1, 2, 2, 2, 2, 3];
// const num = 2;
// console.log(sortedFrequency(arr, num));

// module.exports = findFloor