// TC=o[n*m]
function runProgram(input) {
  input = input.trim().split('\n')
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(' ').map(Number)
  }
  //console.log(input)
  let test = input[0]
  let line = 1
  for (let i = 0; i < test; i++) {
    let el = input[line++]
    let arr = input[line++]
    NextGr8Sum(el, arr)
  }
}
function NextGr8Sum(el, arr) {
  // console.log(el,arr)
   const stack=[]
   const ans=[]
   for(let i=el-1;i>=0;i--)
   {
       if(stack.length>0 && stack[stack.length-1][0]>arr[i])
       {
           ans.push(arr[i])
       }
       else if(stack.length>0 && stack[stack.length-1][0]<=arr[i])
       {
           while(stack.length>0 &&stack[stack.length-1][0]<=arr[i])
           {
               stack.pop()
           }
           if(stack.length!==0)
           {
               ans.push(arr[i])
           }
       }
       stack.push([arr[i],i])
   }
   let sum=0;
   for(let i=0;i<ans.length;i++)
   {
       sum+=ans[i]
   }
   console.log(sum)
}

if (process.env.USER === 'kaustubhmendhe') {
  runProgram(`1
    5
    2 3 5 8 3`)
} else {
  process.stdin.resume()
  process.stdin.setEncoding('ascii')
  let read = ''
  process.stdin.on('data', function (input) {
    read += input
  })
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '')
    read = read.replace(/\n$/, '')
    runProgram(read)
  })
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '')
    runProgram(read)
    process.exit(0)
  })
}
