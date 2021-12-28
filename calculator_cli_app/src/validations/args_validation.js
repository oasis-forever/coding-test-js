const validate = (args_size, seed, n) => {
  if (args_size > 2) {
    console.log("Too many arguments");
    process.exit(1);
  } else if (args_size === 0) {
    console.log("No argument provided");
    process.exit(1);
  } else if (args_size === 1) {
    console.log("Provide both seed and n");
    process.exit(1);
  } else if (typeof seed !== "string" || isNaN(n)) {
    console.log("Provide seed as string and n as number");
    process.exit(1);
  }
}

export {
  validate
};
