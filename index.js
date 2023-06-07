let exchangeRate = 40;

for (let dollars = 10; dollars <= 100; dollars += 10) {
  const UAH = dollars * exchangeRate;
  console.log(dollars + "$ = " + UAH + "₴");
}


const num = +prompt('Please, enter any number');

if (!Number.isInteger(num) || num < 2) {
  alert('Error! Incorrect input value or number is not prime.');
} else {
  let isPrimeNum = true;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrimeNum = false;
      break;
    }
  }
  alert(num + (isPrimeNum ? ' is a prime number.' : ' is not a prime number.'));
}


const thirdPower = +prompt('Please, enter any number to check');

if (Number.isInteger(thirdPower) && thirdPower > 0) {
  let i = 3;

  while (i < thirdPower) {
    i *= 3;
  }

  if (i === thirdPower) {
    alert(thirdPower + ' can be raised to the third power');
  } else {
    alert(thirdPower + ' cannot be raised to the third power');
  }
} else {
  alert('Error! Incorrect input value!');
}