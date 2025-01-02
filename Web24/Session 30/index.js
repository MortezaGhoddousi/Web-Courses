import { createTable, addData, getAllData, getData } from "./db.js";

createTable();

var data = {
    username: "Mahdi",
    email: "m@gmail.com",
    password: "111",
};

addData(data)
    .then(() => {
        console.log("Data inserted to the database successfully");
    })
    .catch((err) => {
        console.log(err);
    });

getAllData()
    .then((result) => {
        if (!result) {
            console.log("data not found");
        } else {
            console.log(result);
        }
    })
    .catch((err) => {
        console.log(err);
    });

getData(2)
    .then((result) => {
        if (!result) {
            console.log("data not found");
        } else {
            console.log(result);
        }
    })
    .catch((err) => {
        console.log(err);
    });
