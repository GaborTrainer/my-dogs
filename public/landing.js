function myScript() {
  console.log('hello world');
  console.log(eldontes());
  console.log(kivalogatas());
  console.log(sorozatszamitas());
  console.log(megszamolas());
  console.log(maximumKivalasztas());
  console.log(mimimumKivalasztas());
  console.log(metszetkepzes());
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
    x: X,
    y: Y,
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
    sum: sum,
    avr: average
  }
}

function megszamolas() {
  const T = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < T.length; i++) {
    sum += T[i];
  }
  return {
    sum: sum
  }
}

function maximumKivalasztas() {
  const T = [1, 2, 3, 4, 5];
  let max = 0;
  for (let i = 0; i < T.length; i++) {
    if (T[i] > max) {
      max = T[i];
    }
  }
  return {
    max: max
  }
}

function mimimumKivalasztas() {
  const T = [1, 2, 3, 4, 5];
  let min = 5;
  for (let i = 0; i < T.length; i++) {
    if (T[i] < min) {
      min = T[i];
    }
  }
  return {
    min: min
  }
}

function metszetkepzes() {
  const T = [1, 2, 3, 4, 5];
  const O = [4, 5, 6, 7, 8, 9];
  const Unio = [];

  let j;
  let k = 0;

  for (let i = 0; i < T.length; i++) {
    j = 0;
    while (j < O.length && O[j] != T[i])
      j++;
    if (j < O.length) {
      Unio[k++] = T[i];
    }
  }
  return {
    unio: Unio
  }
}