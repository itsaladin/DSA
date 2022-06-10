function multipleArray(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(i, j);
    }
  }
}
// here, n + n = n2
// Big 0 notation 0(n2)
multipleArray(2);
