function runProgram(input) {
  input = input.trim().split(/[\r+\n]+/);
  for(var i =0; i<input.length; i++){
      input[i] = input[i].split(" ").map(Number);
  }
  input.shift();
  for(var i = 1; i<input.length;i++){
      var sum = input[i-1][1];
      var arr = input[i];
       if(isSubarray(arr,sum)){
           console.log("Yes")
       }
       else{
           console.log("No")
       }
      i = i + 1;
  }
}
function isSubarray(arr,sum){
  let Cursum = arr[0];
  let init = 0;
  for(var i= 1; i<arr.length; i++){
      while(Cursum > sum && init < i-1){
          Cursum = Cursum - arr[init];
          init ++;
      }
      if(Cursum == sum || arr[i] == sum){
          return true;
      }
      if(i < arr.length){
          Cursum = Cursum + arr[i];
      }
  }
  return false;
}
if (process.env.USER === "kaustubhmendhe") {
  runProgram(`10
7 14
3 5 4 2 2 1 1
8 14
1 7 4 3 2 1 5 6
2 1
3 1
7 1
1 1 1 1 1 1 1
2 1
1 1
10 2
2 6 3 3 4 1 1 5 2 4
3 6
9 6 4
7 6
3 9 6 1 7 8 10
1 6
3
1 1
3`)
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