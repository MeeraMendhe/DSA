function runProgram(input) {

    input = input.trim().split("\n")
    let str=input[1].trim().split("")
    let result=""
    getAllSubstrings(str,result);
}
function getAllSubstrings(str,result) {
    if(str.length===0)
    {
        return
    }
        result+=str.shift()
        console.log(result)
        getAllSubstrings(str,result)
    
       // console.log(x)
  }

if (process.env.USER === "kaustubhmendhe") {
    runProgram(`4
    abcd`);
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