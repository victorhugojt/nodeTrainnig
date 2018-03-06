var readArch = function(text){
    let promise = new Promise(function(resolve, reject){
        console.log("called readArch");
        resolve();
    });
    return promise;
};

var tokenize = function(text){
    let promise = new Promise(function(resolve, reject){
        console.log("called tokenize");
        resolve();
    });
    return promise;
};

var parse = function(text){
    let promise = new Promise(function(resolve, reject){
        console.log("called parse");
        resolve();
    });
    return promise;
};

async function asyncCall(){
    console.log("Calling promises");
    await readArch();
    await tokenize();
    await parse();  
}

asyncCall();

