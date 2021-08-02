function runProgram(input) {
  input = input.trim().split('\n')
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(' ').map(Number)
  }
  console.log(input)
  let test = input[0]
  let line = 1
  for (let i = 0; i < test; i++) {
    let el = input[line++]
    let arr = input[line++]
    console.log(triangle(el, arr))
  }
}
function triangle(el, arr) {
  for (let i = 0; i < el; i++) {
    if (arr[i] !== 3) {
      return "No"
    }
  }
  return 'Yes'
}

if (process.env.USER === 'kaustubhmendhe') {
  runProgram(`2
    3
    3 3 3
    3
    1 1 3`)
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
