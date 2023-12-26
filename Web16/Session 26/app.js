const log = console.log;

// setTimeout(()=>{
//     log('Work1 done');
//     setTimeout(()=>{
//         log('Work2 done');
//     }, 2000);
// }, 2000);


// log('End');

// function asyncFunc(work) {
//     return new Promise(function(resolve, reject){
//         if (work == ''){
//             reject(Error('Nothing'));
//         }
//         setTimeout(()=>{
//             resolve(work);
//         }, 2000);
//     });
// };

// asyncFunc('Work1')
// .then((result)=>{
//     log(result);
//     asyncFunc('Work2')
//     .then((result)=>{
//         log(result);
//     }, (error)=>{
//         log(error)
//     })
// }, (error)=>{
//     log(error);
// })

// log('End');

function* idMaker(){
    let index = 0;
    while(index<5){
        yield index++;
    }
};

var gen = idMaker();

log(gen.next().value);
log(gen.next().value);
log(gen.next().value);
log(gen.next().value);
log(gen.next().value);
log(gen.next().value);
