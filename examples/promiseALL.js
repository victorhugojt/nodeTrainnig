const createPromise = 
   (timeout) => { return new Promise((resolve) => { 
                                                    setTimeout(() => 
                                                                 { console.log(`finished ${timeout}`); 
                                                                   resolve(timeout); }, timeout); 
                                                  }); 
                }; 
                                                                
const main = async () => { const list = await Promise.all([createPromise(5000), createPromise(4000)]); 

console.log('end', list);} 

main();