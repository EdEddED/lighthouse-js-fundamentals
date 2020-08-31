const carPassing = function (cars, speed) {
  var car = {
    time: Date.now(),
    speed: speed
  };
  cars.push(car);
  return cars;
}