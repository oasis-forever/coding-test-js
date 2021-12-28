import { CalculationQuery } from './queies/calculation_query';
import { validate } from './validations/args_validation';

const Application = class {
  constructor(args) {
    this.args_size        = args.length;
    this.seed             = args[0];
    this.n                = args[args.length -1];
    this.calulation_query = null;
  }

  run() {
    validate(this.args_size, this.seed, parseInt(this.n));

    const result = this._calulation_query().f(parseInt(this.n));
    console.log(result);
  }

  // private

  _calulation_query() {
    if (this.calulation_query === null) {
      this.calulation_query = new CalculationQuery(this.seed);
      return this.calulation_query;
    } else {
      return this.calulation_query;
    }
  }
}

export {
  Application
};
