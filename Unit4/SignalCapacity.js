function runProgram(input) {
	input = input.trim().split('\n');
	let number_of_input = Number(input[0]);
 
	let j = 1;
 
	for (let i = 0; i < number_of_input; i++) {
		let num = Number(input[j++]);
		let arr = input[j++].trim().split(' ').map(Number);
		let resultArr = new Array(num).fill(1);
        console.log(resultArr)
		let stack = [];
 
		stack[0] = 0;
		for (let j = 1; j < num; j++) {
			while (stack.length && arr[j] >= arr[stack[stack.length - 1]]) {
				stack.pop();
			}
			if (stack.length === 0) {
				resultArr[j] = j + 1;
			} else {
				resultArr[j] = j - stack[stack.length - 1];
			}
			stack.push(j);
		}
		//console.log(resultArr.join(' '));
	}
}

if (process.env.USER === "kaustubhmendhe") {
    runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`);
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