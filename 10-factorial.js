const arg = process.argv;
const n = Number(arg[2]);

function factorial(n) {
  if (isNaN(n)) return 1;
  if (n > 332) return Infinity;
  if (n < 0) return 1;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

if (n === 1) {
  console.log(NaN);
} else {
  console.log(factorial(n));
}
