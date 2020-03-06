module.exports = {
  pmt: (present_value, rate, numer_of_periods) => {
    return present_value * (
      (Math.pow(rate + 1, numer_of_periods) * rate) / (Math.pow(1 + rate, numer_of_periods) - 1)
    );
  },
  ipmt: (rate, period, numer_of_periods, present_value) => {

  },
  ppmt: (rate, period, numer_of_periods, present_value) => {

  },
  fv: (rate, numer_of_periods, payment_amount, present_value) => {
    return present_value * Math.pow((1 + rate), numer_of_periods);
  }
}
