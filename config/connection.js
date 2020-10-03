const mysql = require("mysql");

// this is the connection to mysql on my local computer

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "bean2326bean2326",
//   database: "states_db"
// });

// this is the connection to mysql from Heroku

const connection = mysql.createConnection({
  host: "sm9j2j5q6c8bpgyq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "b9umxdiu5aj0e395",
  password: "esnmafkz7zbtqa04",
  database: "q358c0gj15fxkbvu"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;