const http = require("http")

const CalculationQuery = class {
  constructor(seed) {
    this.seed = seed
    this.uri  = null
  }

  f(n) {
    if (n == 0) {
      return 1;
    } else if (n == 2) {
      return 2;
    } else if (n % 2 == 0) {
      return f(n - 1) + f(n - 2) + f(n - 3) + f(n - 4)
    } else {
      return this._ask_server(n);
    }
  }

  // private

  _uri() {
    if (this.uri === null) {
      this.uri = process.env.CALCULATION_API;
      return this.uri;
    } else {
      return this.uri;
    }
  }

  _ask_server(n) {
    http.get(`${this._uri()}?seed=${this.seed}&n=${n}`, (res) => {
      let body = "";
      res.setEncoding("utf8");

      res.on("data", (chunk) => {
        body += chunk;
      });

      res.on("end", (res) => {
        const result = JSON.parse(body).result;
        return parseInt(result);
      });

    }).on("error", (e) => {
      return e.message;
    });
  }
}

export {
  CalculationQuery
};
