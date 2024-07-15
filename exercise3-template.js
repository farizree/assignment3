/**
  Diberikan function yang menerima 2 parameter, yaitu :
    parameter 1: array of integer (unsorted) 
    parameter 2: integer. 
  Function tersebut akan mengembalikan array 2 dimensi.
  Masing-masing dimensi array terdiri 2 angka yang jika dijumlahkan mempunyai nilai yang sama dengan parameter 2.
 */

  function sumArray(arr, int) {
    let arrResult = [];
    for (let a = 0; a < arr.length; a++) {
      let findNumber = int - arr[a];
      for (let b = a + 1; b < arr.length; b++) {
        if (arr[b]==findNumber) {
          arrResult.push([arr[a],findNumber]);
          delete arr[arr.indexOf(findNumber)];
          break;
        }
      }
      
    }
    return arrResult;
}

// Test Cases
console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]
console.log(sumArray([1, -1, 2, -2, 3, -3], 0)); // [[1, -1], [2, -2], [3, -3]]
console.log(sumArray([1, 1, 1, 1], 2)); // [[1, 1], [1, 1], [1, 1]]
console.log(sumArray([1, 2, 3, 4, 5], 10)); // []