function isPrimeNumber(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeNumber(17)); // true
console.log(isPrimeNumber(18));//false