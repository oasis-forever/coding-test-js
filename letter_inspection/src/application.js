"use strict;"

const Application = class {
  constructor(str_1, str_2) {
    this.str_1 = str_1
    this.str_2 = str_2
  }

  sort_string(str) {
    return str.split("").sort().join("");
  }

  exactly_equal_size_and_include() {
    return this.sort_string(this.str_1) === this.sort_string(this.str_2);
  }
}

export {
  Application
};
