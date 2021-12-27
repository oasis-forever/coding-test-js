"use strict;"

const Application = class {
  constructor(str_1, str_2) {
    this.str_1 = str_1;
    this.str_2 = str_2;
  }

  exactly_equal_size_and_included() {
    return this._sort_string(this.str_1) === this._sort_string(this.str_2);
  }

  // private

  _sort_string(str) {
    return str.split("").sort().join("");
  }
}

export {
  Application
};
