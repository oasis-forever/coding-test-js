"use strict;"

const StringComparer = class {
  sort_string(str) {
    return str.split("").sort().join("");
  }
  exactly_equal_size_and_include(str1, str2) {
    return str1 === str2;
  }
}

export {
  StringComparer
};
