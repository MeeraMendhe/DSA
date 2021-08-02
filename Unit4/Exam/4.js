function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
   // console.log(input)
    let test = input[0]
    let line = 1
    for (let i = 0; i < test; i++) {
      let [el,target] = input[line++]
      let arr = input[line++]
      //console.log(el,target,arr)
      Kodd(el,target,arr)
    }

  }
  
  function Kodd(el,target,arr)
  {
      let ans=[]
      let final=0
      for(let i=0;i<el;i++)
      {
          let str=""
           for(let j=i;j<el;j++)
           {
               str+=arr[j]+" "
               ans.push(str)
           }
      }
     // console.log(ans)
     for(let i=0;i<ans.length;i++)
     {
         ans[i]=ans[i].trim().split(" ").map(Number)
        // console.log(ans)
     }
     for(let i=0;i<ans.length;i++)
     {
         let x=ans[i]
         let count=0
         for(let j=0;j<x.length;j++)
         {
             if(x[j]%2==1)
             {
                 count++
             }
         }
         if(count>=target)
         {
           final++
         }
     }
     console.log(final)
  }

  
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`2
    4 2
    4 3 2 1
    2 1
    2 3`)
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
  