const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(locations){
  let goodStation = [];
  for ( let station of locations ){
    if ( station[1] >= 20 ){
      if (( station[2] == 'school' ) || ( station[2] == 'community centre' ))
        goodStation.push(station[0]);
    }
  }
  return goodStation;
}

chooseStations(stations);
