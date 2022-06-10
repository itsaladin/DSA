function uniqueName(arr) {
  let uniqueName = [];

  //time complexity ==> n2
  //space complexity ==> n
  for (let i = 0; i < arr.length; i++) {
    //time complx => n
    let item = arr[i];
    if (!uniqueName.includes(item)) {
      //time complex => n
      uniqueName.push(item);
    }
  }
  return uniqueName; //space complex => n
}
let nameArray = ["Ashik", "tamim", "tamanna", "Ashik", "aladdin", "tamanna"];

console.log(uniqueName(nameArray));
