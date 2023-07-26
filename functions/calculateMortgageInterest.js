/**
 * Calulates the interest of a mortgage
 * @param {number} principle - The principle balance of the mortgage
 * @param {number} interestRate - The annual interest rate of the mortgage
 */

function calculateMonthlyInterestPayment(principle, interestRate) {
  const monthlyInterestRate = interestRate / 12;
  return principle * monthlyInterestRate;
}

const mortgageInterest = calculateMonthlyInterestPayment(353199.27, 0.04125);

const convertToDollar = mortgageInterest.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

console.log(convertToDollar); // $1,214.12
