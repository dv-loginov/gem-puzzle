export function generateNumberSet(size) {
  const arr = new Set();
  const length = size ** 2;

  while (arr.size < length) {
    arr.add(Math.floor(Math.random() * length));
  }

  return arr;
}

export function toTime(sec) {

  
  let m = Math.floor(sec / 60);
  let s = sec % 60;
  m = m % 60;
  

  return pad2(m) + ":" + pad2(s);
}


function pad2(num) {
    let s = num.toString();
    return (s.length < 2)?("0"+s): s;
}
