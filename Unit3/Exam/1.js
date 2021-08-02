// TC=o[n*m]
function runProgram(input) {
   input=input.trim().split("\n")
   for(let i=0;i<input.length;i++)
   {
       input[i]=input[i].trim().split(" ").map(Number)
   }
//   console.log(input)
   const test=input[0]
   input.shift()
   for(var i=0;i<test;i++)
   {
    const el=input[0][0]
    const str=input[0][1]
    //console.log(el,str)
    input.shift()
    var str1=""
    for(let j=0;j<el;j++)
    {
       
       let x=input[j].sort((a,b)=>a-b)
        str1+=x[x.length-1]+" "
    }
    console.log(str1)
    for(let j=0;j<el;j++)
    {
        input.shift()
    }
   }
  }
  if (process.env.USER === "kaustubhmendhe") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    3 3
    7 7 1
    4 3 10
    1 2 3`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }