




function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  //result array
  //a counter
  //b counter
  //iterate through apples
  //check to see if a + apples[i]  >= s && a <= t
  //a counter++
  //if b - oranges[i] <= t && >= s
  //b counter++
  //push counters to result array and return result
  let arr = [];
  let apps = 0;
  let oj = 0;
  for (let i = 0; i < apples.length; i++) {
      if (a + apples[i] >= s && a + apples[i] <= t) {
          apps++;
          arr.push(apps);
      }
  }
  for (let j = 0; j < oranges.length; j++) {
      if (b + oranges[j] <= t && b + oranges[j] >= s) {
          oj++;
          arr.push(oj);
      }
  }
  console.log(apps);
  console.log(oj);
}
