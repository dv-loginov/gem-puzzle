export function generateNumberSet(size) {
  const arr = new Set();
  const length = size ** 2;

  while (arr.size < length) {
    arr.add(Math.floor(Math.random() * length));
  }

  return arr;
}
