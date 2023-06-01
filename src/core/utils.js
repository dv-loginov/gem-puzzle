export function onListener(node, event, handle) {
  node.addEventListener(event, function() { handle(this) });
}

export function offListener(node, event, handle) {
  node.removeEventListener(event, handle);
}

export function icoChange(node, icoName) {
  node.textContent = icoName;
}

export function changeClass(node, classOn, classOff) {
  if (classOn) node.classList.add(classOn);
  if (classOff) node.classList.remove(classOff);
}

export function generateNumberSet(size) {
  const arr = new Set();
  const length = size ** 2;

  while (arr.size < length) {
    arr.add(Math.floor(Math.random() * length));
  }

  return arr;
}
