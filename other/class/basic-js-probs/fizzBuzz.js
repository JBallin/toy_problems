const fizzBuzz = () => {
  for (let n = 1; n <= 100; n++) {
    console.log(
      n % 15 === 0 ? 'fizzbuzz' :
      n % 3  === 0 ? 'fizz'     :
      n % 5  === 0 ? 'buzz'     :
      n
    )
  }
}

fizzBuzz();
