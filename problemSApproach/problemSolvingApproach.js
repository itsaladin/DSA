let temperature = [-3, 6, 55, 23, -4, "error", -6, 99, 66];

function getHigherAndLowerNum(arr) {
  //create a higher var
  let higher = arr[0];
  //create a lover var
  let lower = arr[0];

  //iterate the whole array
  for (let i = 0; i < arr.length; i++) {
    //Let's check is there has any error
    if (typeof arr[i] !== "number") continue;

    //if higer variable has smaller number then our current number then value will be our current element
    if (higher < arr[i]) {
      higher = arr[i];
    }
    if (lower > arr[i]) {
      lower = arr[i];
    }
  }
  return higher - lower;
}

console.log(getHigherAndLowerNum(temperature));
