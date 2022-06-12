// function logarithmsN(num) {
//   while (num > 1) {
//     console.log(num);
//     num /= 2;
//   }
//   console.log("Program done");
// }

// logarithmsN(16);

function recursionLogN(num) {
  if (num <= 1) {
    console.log("Program done");
    return;
  }
  console.log(num);
  recursionLogN(num / 2);
}

recursionLogN(8);
