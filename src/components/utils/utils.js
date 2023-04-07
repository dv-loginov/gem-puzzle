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
  node.classList.add(classOn);
  node.classList.remove(classOff);
}
