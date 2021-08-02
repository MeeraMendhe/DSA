function runProgram(input) {
    input = +input.trim()
    console.log(printCountRec(input))
}
function printCountRec(dist)
{
    // Base cases
    if (dist<0)     return 0;
    if (dist==0) return 1;
 
    // Recur for all previous 3 and add the results
    return printCountRec(dist-1) +
        printCountRec(dist-2) +
        printCountRec(dist-3);
}


if (process.env.USER === "kaustubhmendhe") {
    runProgram(`4`);
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
