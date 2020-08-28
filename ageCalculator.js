let name = "Susie"
let bYear = 1983;
let cYear = 2015;

function ageCalculator(name, yearBirth, yearCurrent){
  return name + " is " + ( yearCurrent - yearBirth ) + " years old."
}

console.log (ageCalculator(name, bYear, cYear));