const log = console.log;
// setTimeout(()=>{
//     log('Work1');
//     setTimeout(()=>{
//         log("Work2");
//     }, 2000);
// }, 2000);

// log('end');


const myFunction = (work)=>{
    return new Promise((resolve, reject)=>{
        if (work === ''){
            reject('There is no work to do!');
        }
        setTimeout(()=>{
            resolve(work);
        }, 2000);
    });
};

// myFunction('Work1').then(resolve=>{
//     log(resolve);
//     return myFunction('Work2').then(resolve =>{
//         log(resolve);
//     }, error=>{
//         log(error);
//     })
// }, error=>{
//     log(error);
// })

// log('end');


let res = [4, 5, 1, 8, 2, 0].filter(function (x) { return x > 3; }); 

console.log(res); 

console.log(Array(3+1).join("foo")); 
console.log("foo".repeat(3))
