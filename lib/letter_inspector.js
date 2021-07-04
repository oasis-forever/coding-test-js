"use strict;"

const LetterInspector = class {
  constructor(str1, str2) {
    this._str1 = str1
    this._str2 = str2
  }

  sort_string(str) {
    return str.split("").sort().join("");
  }

  exactly_equal_size_and_include() {
    return this.sort_string(this._str1) === this.sort_string(this._str2);
  }
}

export {
  LetterInspector
};
