class rectangle {
    constructor (h, w) {
        this.h = h;
        this.w = w;
    };

    primeter () {
        this.p = 2*(this.h+this.w);
        return this.p;
    };

    area () {
        this.a = this.h*this.w;
        return this.a;
    }

};

const log = console.log;

log('Hello from Node js');

var s = new rectangle(5, 2);

log(s);
log(s.h);
log(s.w);

log(s.primeter());
log(s.area());

var map = new Map();

map.set('fname', 'Morteza');
map.set('lname', 'Ghoddousi');
map.set('age', 29);


log(map.get('lname'));

for (var iterator of map.keys()){
    log(iterator);
}

for (var iterator of map.values()){
    log(iterator);
}

for (var iterator of map.entries()){
    log(`${iterator[0]} : ${iterator[1]}`);
}

let set = new Set();
set.add(5).add(9).add(59).add(9);

log(set.entries());



setTimeout(()=>{
    log('Work1 done');
    setTimeout(()=>{
        log('Work2 done');
    }, 2000);
}, 2000);


log('End');

