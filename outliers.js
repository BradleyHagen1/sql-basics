function findOutlier(integer) {
  let even = [];
  let odd = [];

  for (let i = 0; i < integer.length; i++) {
    if (integer[i] % 2 === 0) {
      even.push(integer[i]);
    } else if (integer[i] % 1 === 0) {
      odd.push(integer[i]);
    } else if (integer[i] % -2 === 0) {
      return even(integer[i]);
    } else {
      return odd(integer[i]);
    }
  }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

function findOutlier(integers) {
  const evens = [];
  const odds = [];

  integers.forEach((a) => {
    if (a % 2 == 0) {
      evens.push(a);
    } else {
      odds.push(a);
    }
  });

  if (evens.length == 1) {
    return evens[0];
  } else if (odds.length == 1) {
    return odds[0];
  }

  return "The array has no outliers";
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
