let hours = 20;
let wage = 10;
let total = 0;
let weeksUntil = 0;
const oneMil = 1000000;

if(hours <= 40) {
    total = (hours*wage);
    weeksUntil = (Math.floor(oneMil/total));
    console.log(`Your paycheck comes out to $${total}. It will take ${weeksUntil} weeks to make $1,000,000.`);
} else {
    total = ((hours-40)*(wage*1.5)+(40*wage));
    weeksUntil = (Math.floor(oneMil/total));
    console.log(`Your paycheck comes out to $${total} with the Overtime you worked. It will take ${weeksUntil} weeks to make $1,000,000.`);
}