// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    //console.log(input)
    let test = input[0]
     input.shift()
    const stack = []
    const queue = []
    var flag = true
    for (let i = 0; i < test; i++) {
        let x = input[i]

        if (x[0] == 1) {
            queue.push(x[1])
            flag = false
        }
        if (x[0] == 2) {
            stack.push(x[1])
            flag = false
        }
        if (x[0] == 3) {
            if (queue.length != 0) {
                var y = queue[0]
                console.log(y)
               // queue.shift()
            }

        }
        if (x[0] == 4) {
            if (stack.length != 0) {
                let z = stack[stack.length - 1]
                console.log(z)
               // stack.pop()
            }

        }
        if (x[0] == 5) {
            queue.shift()
            stack.push(y)
        }

    }
    if (flag == true) {
        console.log(-1)
    }


}

if (process.env.USER === "kaustubhmendhe") {
    runProgram(`10
    1 99999
    2 10000
    3
    4
    1 300
    4
    2 444
    5
    4
    3`);
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