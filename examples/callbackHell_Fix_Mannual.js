function tokenize(text, callback){
    console.log("called tokenize");
    callback();
};

function parse (tokens, callback){
    console.log("called parse");
    callback();
}

function readArch(text, callback){
    console.log("called readArch");
    callback();
}

function readFinished(text){
    tokenize(text, tokenishedFinished);
}

function tokenishedFinished(tokens){
    parse(tokens, parseFinished);
}

function parseFinished(){
    console.log("finished");
}

readArch("archivo", readFinished);
