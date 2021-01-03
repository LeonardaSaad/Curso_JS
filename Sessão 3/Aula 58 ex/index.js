function FizzBuzz(número) {
    if (número % 3 === 0 && número % 5 === 0) return "FizzBuzz"
    if (número % 3 === 0) return "Fizz"
    if (número % 5 === 0) return "Buzz"
    return número
}

//const número = 15;
//console.log(FizzBuzz(número) + ", " + checar(número))

for (let i = 0; i <= 100; i++) console.log(i, FizzBuzz(i))
