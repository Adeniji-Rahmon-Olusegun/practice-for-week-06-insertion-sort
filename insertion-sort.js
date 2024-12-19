// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {

  let sortedArr = [];
  let arrCopy = arr.slice();

  while (arrCopy.length > 0) {
    console.log(sortedArr.join(','));

    let popped = arrCopy.pop();

    if (sortedArr.length === 0) {
      //sortedArr.push(null);
      sortedArr.push(popped);
    } else {
      if (popped > sortedArr[0]) {
        for (let idx = 0; idx < sortedArr.length; idx++) {
          let num = sortedArr[idx];

          if (popped < num) {
            sortedArr.splice(idx, 0, popped);
            break;
          }
        }
      } else {
        sortedArr.splice(0, 0, popped);
      }
    }

  }
  
  return sortedArr;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  for (let idx = 1; idx < arr.length; idx++) {
    let temp = arr[idx];
    let jdx = idx - 1;

    while (jdx >= 0 && arr[jdx] > temp) {
      
      arr[jdx + 1] = arr[jdx];
      jdx--;
    }

    arr[jdx + 1] = temp;
    console.log(arr.join(","));
  }
}

arr = [2,4,6,8,1,3,5,7,9];

console.log(insertionSortInPlace(arr));

module.exports = [insertionSort, insertionSortInPlace];