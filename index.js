let nonMutatingConcat = (original, attach) => {
  // returns new array without mutation
  return original.concat(attach) 
}

const first = [1, 2, 3];
const second = [4, 5];

console.log(nonMutatingConcat(first, second))
