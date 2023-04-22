
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 180000, years: 30, rate: 3.3})).toEqual('788.32')
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 180000, years: 30, rate: 3.3}).toString()).toMatch(/^\d+\.\d\d$/);
});

/// etc
