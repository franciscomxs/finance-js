const Finance = require('./index');

describe('PMT', () => {
  it('calculates properly', () => {
    expect(Finance.pmt(2000, 0.0165, 12)).toEqual(185.07762615566858);
  });
});

describe('FV', () => {
  it('calculates properly', () => {
    expect(Finance.fv(0.0165, 1, 12, 1000)).toEqual(76.04);
  });
});
//
// describe('PPMT', () => {
//   it('calculates properly', () => {
//     expect(Finance.ppmt(0.0165,1,12,1000)).toEqual(76.04);
//   });
// });
//
// describe('IPMT', () => {
//   it('calculates properly', () => {
//     expect(Finance.ipmt(0.0165,1,12,1000)).toEqual(16.5);
//   });
// });
//
// describe('PV', () => {
//   it('', () => {
//       expect(Finance.pv(0.0165,1,12,1000)).toEqual(16.5);
//   });
// });
