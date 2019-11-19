function pluck(objects, fieldName) {
    let arrName = []

    for (let elem of objects){
        if (fieldName in elem){
            arrName.push(elem[fieldName]);
        }
    }
    return arrName;
  }