/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems.
 The test cases are scaled to six decimal places,
  though answers with absolute error of up to  are acceptable.
*/

// function plusMinus(arr) {

//   let positive = 0
//   let negative = 0
//   let zero = 0

//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//           positive += 1
//       } else if (arr[i] < 0) {
//           negative += 1
//       } else {
//           zero += 1
//       }
//   }

//   let pos = positive % arr.length
//   let neg = negative % arr.length
//   let zer = zero % arr.length

//   let a = pos / parseInt(arr.length)
//   let b = neg / parseInt(arr.length)
//   let c = zer / parseInt(arr.length)

//   let num1 = a.toFixed(6)
//   let num2 = b.toFixed(6)
//   let num3 = c.toFixed(6)
//   let result = [num1, num2, num3]

//   return result.forEach((e)=>{console.log(e);});

// }
function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  }

  let length = arr.length;
  let pos = (positive / length).toFixed(6);
  let neg = (negative / length).toFixed(6);
  let zer = (zero / length).toFixed(6);

  let result = [pos, neg, zer];

  result.forEach((e) => {
    console.log(e);
  });
}
