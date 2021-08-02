// function runProgram(input) {
//   input = input.trim().split(/[\r+\n]+/)
//   for (var i = 0; i < input.length; i++) {
//       input[i] = input[i].split(" ").map(Number)
//   }
//   input.shift()
//   var x = 1;
//   for (var i = 1; i <input.length; i++) {
//       var num = input[i-1][1];
//       var arr = input[i].sort((a,b)=>a-b)
//       var m = 0;
//       var z = arr.length-1;
//       while(m <= z){
//           if(arr[m] + arr[z] == num && m!= z){
//               console.log(1);
//               break;
//           }
//           else if(arr[m] + arr[z] > num && m!=z){
//               z--;
//           }
//           else if(arr[m] + arr[z] < num && m!=z){
//               m++;
//           }
//           else if ( m == z){
//               console.log(-1);
//               break;
//           }
//       }
//       i = i + 1;
//   }
// }
function runProgram(input) {
    input = input.trim().split('\n');
    const tests = Number(input[0]);
    let line = 1;
    for (let i = 0; i < tests; i++) {
      const [size, target] = input[line++].trim().split(' ').map(Number);
      const arr = input[line++].trim().split(' ').map(Number);
      console.log(suchPairReturns(arr, size, target));
    }
    function suchPairReturns(arr, size, target) {
      const obj = {};
      for (let i = 0; i < size; i++) {
        if (obj[arr[i]] === undefined) {
          obj[target - arr[i]] = 0;
        } else {
          return '1';
        }
      }
      return '-1';
    }
  }
if (process.env.USERNAME === "poora") {
  runProgram(`10
3 -9
-1 3 -1
10 -13
-7 -6 4 10 -5 0 -3 1 -6 5
4 -9
-2 2 0 -4
2 3
0 0
8 2
5 -6 7 6 0 3 -4 8
1 -7
0
8 -6
4 7 4 -1 5 4 -6 -8
6 4
6 -1 -5 -5 2 -5
4 -4
0 -1 3 -2
1 3
-1`);
}
else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
      read += input;
  });
  process.stdin.on("end", function () {
      read = read.replace(/\n$/, "")
      runProgram(read);
  });
  process.on("SIGINT", function () {
      read = read.replace(/\n$/, "")
      runProgram(read);
      process.exit(0);
  });
}
