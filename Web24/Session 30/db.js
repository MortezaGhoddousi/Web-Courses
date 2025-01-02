import sqlite from "sqlite3";

const db = new sqlite.Database("db.db", (e) => {
    if (e) {
        console.log(e);
    } else {
        console.log("Connecting to the database successfully");
    }
});

const createTable = function () {
    const query = `CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
        )`;

    db.run(query, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Table Created");
        }
    });
};

function addData(data) {
    return new Promise((resolve, reject) => {
        const query =
            "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
        db.run(query, [data.username, data.email, data.password], (err) => {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });
}

function getAllData() {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM user";
        db.all(query, (err, row) => {
            if (err) {
                reject(err);
            }
            if (row === undefined) {
                resolve(false);
            }
            resolve(row);
        });
    });
}

function getData(id) {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM user WHERE id=?";
        db.get(query, [id], (err, row) => {
            if (err) {
                reject(err);
            }
            if (row === undefined) {
                resolve(false);
            }
            resolve(row);
        });
    });
}

export { createTable, addData, getAllData, getData };
