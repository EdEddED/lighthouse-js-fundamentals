let isThree = false;
let isFour = false;
for (let i = 100; i <= 200; i++){
  isThree = (( i % 3 ) === 0) ? true : false;
  isFour = (( i % 4 ) === 0) ? true : false;
  if(isThree || isFour){
    console.log((isThree ? "Loopy" : "") + (isFour ? "Lighthouse" : ""));
  }else{
    console.log(i);
  }
}