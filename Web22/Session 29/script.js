function asyncFunc(work){
    return new Promise(function(resolve, reject){
        if (work == '') {
            reject('Error: work is empty!');
        }
        setTimeout(function(){
            resolve(work + ' resolved!');
        }, 2000)  
    })
}

asyncFunc('')
.then(function(r){
    console.log(r)
})
.catch(function(e){
    console.log(e)
})


console.log('end');

