"use strict;"

const fibonacci = (init_num, iter) => {
  let current_num = init_num;
  let next_num    = current_num + 1;
  const result    = new Array;
  for (let i = init_num; i < iter + init_num; i ++) {
    result.push(current_num);
    [current_num, next_num] = [next_num, current_num + next_num];
  }
  return result;
}

export {
  fibonacci
};
