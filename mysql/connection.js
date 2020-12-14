const mysql = require('mysql')

class Connection {
    constructor() {
        if (!this.pool) {
            console.log('creating connection pool...')
            this.pool = mysql.createPool({
                connectionLimit: 100,
                host: "104.197.184.159",
                user: "root",
                password: "Ponyboy3",
                database: "employees"
            })
            return this.pool
        }
        return this.pool
    }
}

const instance = new Connection ()

module.exports = instance;
