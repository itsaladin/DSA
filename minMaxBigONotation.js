// //time complexcity Big 0 notation 0(n)
// function min5Log(n) {
//   for (let i = 0; i < Math.max(5, n); i++) {
//     console.log(i);
//   }
// }
// min5Log(1);

//time complexcity Big 0 notation 0(1)
function max5Log(n) {
  for (let i = 0; i < Math.min(5, n); i++) {
    console.log(i);
  }
}
max5Log(2);
