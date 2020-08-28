function lastIndexOf(array, value){
  let finalIndex = -1;
  let i = 0;
  while ( i < array.length ){
    if ( array[i] == value ){
      finalIndex = i;
    }
    i++;
  }
  return finalIndex;
}