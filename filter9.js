function filter (arr, fn) {
    let filterArr = [];

    for (let i = 0; i < arr.length; i++){
        if ( fn(arr[i]) ) filterArr.push(arr[i]);
    }
    return filterArr;
  }
