function startCount (tag: string, timeouts: number): Promise<void> {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        console.log(`${tag}:${i}`)
      }, timeouts)
    }
    resolve()
  })
}

async function main () {
  let promiseArr: object[] = []
  let timeouts = [2500, 4000, 8000, 3000]
  for (let i = 0; i < 3; i++) {
    promiseArr.push(startCount(i.toString(), timeouts[i]))
    setTimeout(() => {}, 1000)
  }
  await Promise.all(promiseArr)
    .then(() => {
      console.log('Resolved all functions!')
    })
    .catch(err => {
      console.log(`Error: ${err}`)
    })
}

function delay (ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function asyncHello (): Promise<void> {
  console.log('Hello')
  await delay(1000)
  console.log('World')
}

asyncHello()
