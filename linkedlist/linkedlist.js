function arrayToList(arr,i = 0){
    if (i == arr.length-1){
        return {value : arr[i],rest : null}
    }
    return {value : arr[i], rest : arrayToList(arr,i+1) }
 }

function listToArray(list,arr = []){

    if (list.rest == null){
        arr.push(list.value)
        return arr;
    }
    arr.push(list.value);
    return listToArray(list.rest,arr);
}

function prepeand(list,elem){
    return {elem,rest : list}
}

function nth(list,index = 0){
  if (!list) return undefined;

  else if (n == 0) return list.value;

  else return nth(list.rest, n - 1);
}

