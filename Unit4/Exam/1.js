function runProgram(input) {
input= input.trim().split("\n")
let test=+input[0]
let line=1
for(let i=0;i<test;i++)
{
    let num=+input[line++]
    console.log(NoOfWay(num))
}
function NoOfWay(num)
{
   // console.log(num)
   if(num===0)
   {
       return 1
   }
   if(num<0)
   {
       return 0
   }
   return NoOfWay(num-1)+NoOfWay(num-2)+NoOfWay(num-5)
}
}
if (process.env.USER === "kaustubhmendhe") {
    runProgram(`1
    4`);
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