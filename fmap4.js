function fmap(a, gen){
    return function (...arr){
        return a( gen(...arr) );
    }
}