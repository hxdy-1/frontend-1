const firstName = prompt("Enter your first name:");
const monthlyInvestment = prompt("Enter monthly amount u wanna invest:");
const futureYear = prompt("Enter the future year till when u wanna make investments:");

const currentYear = 2023;
const totalAmountInvested = (monthlyInvestment * ((futureYear - currentYear) * 12));

alert(`Hey ${firstName}, your total investment by the end of ${futureYear} will be ${totalAmountInvested}`);

// const additionalReturn = (totalAmountInvested + ((15 / 100) * totalAmountInvested));

// console.log(additionalReturn);

console.log(totalAmountInvested + ((15 / 100) * totalAmountInvested));