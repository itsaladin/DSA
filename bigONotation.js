// case 1 to checking time complex
// here, high time complexcity, & `Big 0(n)`

// function sumOfAll(n) {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// case 2 to checking time complex
// here, Low time complexcity, & `Big 0(1)`

function sumOfAll(n) {
  return (n * (n + 1)) / 2;
}

let time1 = performance.now();
console.log(sumOfAll(5000000000));
let time2 = performance.now();

let tComplexcity = `get time complexcity = ${(time2 - time1) / 1000}`;
console.log(tComplexcity);
