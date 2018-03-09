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

let text = "Archivo"
readArch(text, function(){
                 console.log("read File called");
                 tokenize(text, function(){
                                  console.log("read File called");
                                  parse(text, function(){
                                     console.log("parse called");
                                  });
                 });
});