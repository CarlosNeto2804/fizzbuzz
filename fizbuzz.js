// versao 1
/* for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`FizzBuzz`);
  } else if (i % 3 == 0) {
    console.log(`Fizz`);
  } else if (i % 5 == 0) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  }
} */

function fizzbuzz(valorMaximo) {
  let msg = "";
  for (let i = 1; i <= valorMaximo; i++, msg = "") {
    if (!(i % 3)) msg += "Fizz";
    if (!(i % 5)) msg += "Buzz";

    console.log(msg || i);
  }
}
fizzbuzz(100)