const log = console.log;

// setTimeout(() => {
//     log("Work1!");
// }, 2000);

// log("Done!");

// const func = (work) => {
//     return new Promise((resolve, reject) => {
//         if (work == "") {
//             reject(Error("There are no task!"));
//         }

//         setTimeout(() => {
//             resolve(work);
//         }, 2000);
//     });
// };

// func("").then(
//     (result) => {
//         log(result);
//         return func("").then(
//             (result) => {
//                 log(result);
//             },
//             (error) => {
//                 log(error);
//             }
//         );
//     },
//     (error) => {
//         log(error);
//     }
// );

// log("Done!");

// var arr = ["Morteza", "Mahdi", "Mohammad", "Nazanin"];

// arr.forEach((e) => {
//     log(e);
// });

// var maparr = arr.map((e) => {
//     e += "_en"; //e = e+"_en"
//     return e;
// });

// log(maparr);

// var filterarr = arr.filter((e) => {
//     if (e[0] == "M") {
//         return true;
//     }
// });

// log(filterarr);

window.addEventListener("load", () => {
    const Obj = function (name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    };

    var goods = [];
    goods[0] = new Obj("Obj1", 1000, 1);
    goods[1] = new Obj("Obj2", 1500, 2);
    goods[2] = new Obj("Obj3", 1800, 3);
    goods[3] = new Obj("Obj4", 2000, 4);
    goods[4] = new Obj("Obj5", 1200, 5);
    goods[5] = new Obj("Obj6", 1700, 6);
    goods[6] = new Obj("Obj7", 800, 7);
    goods[7] = new Obj("Obj8", 2500, 8);
    goods[8] = new Obj("Obj9", 2100, 9);

    var filteredGoods = goods.filter((e) => {
        if (e.price > 1500) {
            return true;
        }
    });

    filteredGoods.forEach((e) => {
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");

        h1.innerHTML = e.name;
        p1.innerHTML = e.price;
        p2.innerHTML = e.id;

        div.appendChild(h1);
        div.appendChild(p1);
        div.appendChild(p2);

        let body = document.querySelector("body");
        body.appendChild(div);
    });

    log(filteredGoods);
});
