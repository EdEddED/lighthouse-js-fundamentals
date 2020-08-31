const judgeVegetable = function (vegetables, metric) {
  let winner;
  let currentBest = 0;
  for (let veggie of vegetables){
    if ( veggie[metric] > currentBest ){
      currentBest = veggie[metric];
      winner = veggie["submitter"];
    }
  }
  return winner;
};
