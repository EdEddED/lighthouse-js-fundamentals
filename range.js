function range(start, end, step){
  let reply = [];
  let current = start;
  if (( start === undefined ) || ( end === undefined ) || ( step === undefined ) || ( start > end ) || ( step <= 0 )){
    return reply;
  }
  reply.push(start);
  while ( current <= end ){
    current += step;
    if ( current <= end ){
      reply.push(current);
    }
  }
  return reply;
}