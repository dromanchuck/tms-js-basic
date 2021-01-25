//arguments
function findMax() {
  let args = [...arguments];
  console.log(args, arguments);

  let max = args.reduce((acc, value) => {
    return acc > value ? acc : value;
  }, args[0]);

  return max;
}

let max = findMax(1, 2, 3, 4, 5, 6, 7, 8, 9);

//JSON parse stringify
