/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */
function sumArray (arr) {
    let tmp = 0;
    for (let a = 0; a < arr.length; a++) {
        tmp += arr[a];
    }
    return tmp;
}

function subArray(arr) {
    // your code here
    let arrResult = [[],];
    let container = [];
    for (let a = 0; a < arr.length; a++) {
        for (let b = arr.length; b > a; b--) {
            arrResult = [arr.slice(a,b), sumArray(arr.slice(a,b))];
            container.push(arrResult);
        }
    }

    let maxIndex=0;
    for (let x = 0; x < container.length; x++) {    
        if ((container[x][1] >= container[maxIndex][1])) {
            maxIndex=x;
        }
    }
    return container[maxIndex];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]