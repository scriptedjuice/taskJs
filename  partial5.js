function partial(fn, ...args) {
  return function(...restArgs){
    return fn(...args.concat(restArgs))
}
}