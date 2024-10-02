function asyncFunc(work) {
    return new Promise(function(resolve, reject) {
        if (work == '') {
            reject('Error: work is empty');
        }

        setTimeout(function(){
            resolve('Ok!');
        }, 2000)

    })
}

asyncFunc('')
.then(function(text){
    console.log(text);
})
.catch(function(text){
    console.log(text);
});


console.log('end');