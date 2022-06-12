const myObject = {
  Channel: "Aladdin Studios",
  Creator: "Alauddin Ahme",
  videos: [5, 4, 11, 55],
};
// console.log(Object.keys(myObject)); //big 0(n)
// console.log(Object.values(myObject)); //big 0(n)
// console.log(Object.entries(myObject)); //big 0(n)
console.log(myObject.hasOwnProperty("Creator")); //big 0(1)
