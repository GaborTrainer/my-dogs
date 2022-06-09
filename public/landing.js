function myScript() {
  console.log('hello world');
  console.log(eldontes());
  console.log(kivalogatas());
  console.log(sorozatszamitas());
  console.log(megszamolas());
  console.log(maximumKivalasztas());
  console.log(mimimumKivalasztas());
  console.log(metszetkepzes());
  console.log(kivalasztas());
}

function eldontes() {
  const t = [1, 2, 3, 4, 5];
  const e = 1;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === e) {
      return true;
    }
  }
  return false;
}

function kivalogatas() {
  const t = [1, 2, 3, 4, 5];

  const x = [];
  let j = 0;

  const y = [];
  let k = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] % 2 === 0) {
      x[j] = t[i];
      j++;
    } else {
      y[k] = t[i];
      k++;
    }
  }
  return {
    x: x,
    y: y,
  };
}

function sorozatszamitas() {
  const t = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < t.length; i++) {
    sum += t[i];
  }
  const average = sum / t.length;
  return {
    sum: sum,
    avr: average
  }
}

function megszamolas() {
  const t = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < t.length; i++) {
    sum += t[i];
  }
  return {
    sum: sum
  }
}

function maximumKivalasztas() {
  const t = [1, 2, 3, 4, 5];
  let max = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] > max) {
      max = t[i];
    }
  }
  return {
    max: max
  }
}

function mimimumKivalasztas() {
  const t = [1, 2, 3, 4, 5];
  let min = 5;
  for (let i = 0; i < t.length; i++) {
    if (t[i] < min) {
      min = t[i];
    }
  }
  return {
    min: min
  }
}

function metszetkepzes() {
  const t = [1, 2, 3, 4, 5];
  const o = [4, 5, 6, 7, 8, 9];
  const metszet = [];

  let j;
  let k = 0;

  for (let i = 0; i < t.length; i++) {
    j = 0;
    while (j < o.length && o[j] != t[i])
      j++;
    if (j < o.length) {
      metszet[k++] = t[i];
    }
  }
  return {
    metszet: metszet
  }
}

function kivalasztas() {
  const t = [1, 2, 3, 4, 5];
  const x = 3;

  let i = 0;
  while (t[i] != x && i < t.length) {
    i++;
  }
  let y = i + 1;
  return {
    x: x
  }
}