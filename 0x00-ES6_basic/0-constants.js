/**
 * taskFirst - defines a constant
 * @return {string} a constant string
k*/
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * getLast - function teturns string
 * @return {string} string
*/
export function getLast() {
  return ' is okay';
}

/**
 * taskNexte = function that calls the previous
 * @return {string} string
*/
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast;

  return combination;
}
