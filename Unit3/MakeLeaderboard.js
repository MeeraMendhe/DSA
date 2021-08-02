function runProgram(input) {
    input = input.trim().split("\n");
    input.shift()

    input=input.map(a=>a.trim().split(" ")).
    sort((a,b)=>
    {
        a[1]=Number(a[1])
        b[1]=Number(b[1])

        if(b[1]>a[1])
        {
            return 1
        }
        else if(b[1]<a[1])
        {
            return -1
        }
        else if(b[1]==a[1])
        {
            if(b[0]<a[0])
            {
                return 1
            }
            else
            {
                return -1
            }
        }
    })
    console.log(input)

    var rank=1

    input.forEach((a,i) => {
        
        if(i===0)
        {
            console.log(`${rank} ${a[0]}`)
            return
        }
        if(a[1]===input[i-1][1])
        {
            console.log(`${rank} ${a[0]}`)
        }
        else
        {
            rank=i+1
            console.log(`${rank} ${a[0]}`)
        }
    });



}
if (process.env.USER === "kaustubhmendhe") {
    runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`);
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

//   console.log('a' > 'b') (returns true)
// console.log('b' < 'a') (returns false)