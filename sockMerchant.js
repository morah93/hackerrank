/*
There is a large pile of socks that must be paired by color.
Given an array of integers representing the color of each sock,
determine how many pairs of socks with matching colors there are.

Example


There is one pair of color  and one of color .
There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers, , the colors of the socks in the pile.

*/





function sockMerchant(n, ar) {
  // Write your code here
  let pairs = 0;
  let pairObj = {};
  for (let i = 0; i < ar.length; i++){
      let count = 0;
      let color = ar[i]
      pairObj[color] = count
      for (let j = 0; j < ar.length; j++){
          if (ar[i] === ar[j]) {
              count += 1
              pairObj[color] = count
          }
      }
  }
  const values = Object.values(pairObj)
  for (let value of values){
      pairs += Math.trunc(value / 2)
  }
  return pairs
}
