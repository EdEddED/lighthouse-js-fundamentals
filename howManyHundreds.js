function howManyHundreds(num){
  if (num < 100) {
    return 0
  }
  let mul = 0;
  let hundreds = 0;
  while (hundreds <= num){
    hundreds += 100;
    if (hundreds <= num){
      mul++;
    }
  }
  return mul;
}