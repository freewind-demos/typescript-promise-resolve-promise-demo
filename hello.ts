async function asyncAdd(a: number, b: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(new Promise(resolve => {
            setTimeout(() => {
              resolve(a + b)
            }, 1000);
          })
      )
    }, 1000);
  })
}

async function demo() {
  const result = await asyncAdd(1, 2);
  console.log(result);
}

demo();

