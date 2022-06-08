function myScript() {
  console.log('hello world');
  console.log(eldontes());
  console.log(kivalogatas());
  console.log(sorozatszamitas());
}

function eldontes() {
  const T = [1, 2, 3, 4, 5];
  const e = 1;
  for (let i = 0; i < T.length; i++) {
    if (T[i] === e) {
      return true;
    }
  }
  return false;
}

function kivalogatas() {
  const T = [1, 2, 3, 4, 5];

  const X = [];
  let j = 0;

  const Y = [];
  let k = 0;

  for (let i = 0; i < T.length; i++) {
    if (T[i] % 2 === 0) {
      X[j] = T[i];
      j++;
    } else {
      Y[k] = T[i];
      k++;
    }
  }
  return {
    X: X,
    Y: Y,
  };
}

function sorozatszamitas() {
  const T = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < T.length; i++) {
    sum += T[i];
  }
  const average = sum / T.length;
  return {
    Sum: sum,
    Avr: average
  }
}