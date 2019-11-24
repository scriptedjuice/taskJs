function count (obj) {
    let count = 0;
    for (key in obj){
        count++;
    }
    return count;
}