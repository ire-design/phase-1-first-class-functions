function  receivesAFunction(cb){
    return cb()
}

function returnsANamedFunction(){
    return(function namedFn(){})
}

function returnsAnAnonymousFunction(){
    return(function(){})
}
