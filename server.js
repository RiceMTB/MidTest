// const sql = require("mssql/msnodesqlv8");

// const main = async () => {
//   try {
//     console.log('Trying to connect to database...');
//     const pool = new sql.ConnectionPool({
//       server: "Hal200\\SQLEXPRESS",
//       //server: "COMPUTERNAME\\TESTINSTANCETWO",
//       database: "JokeDB",
//       driver: "msnodesqlv8",
//       options: {
//         trustedConnection: true
//       }
//     });

//     await pool.connect();
//     const request = new sql.Request(pool);
//     const query = `SELECT * FROM [TBL2]`;
//     const result = await request.query(query);

//     console.log(result);

//     // show one record in recordset
//     console.log('Record 4:');
//     console.log(result.recordset[3]);

//     // show all records in recordset
//     console.log('Show all records in recordset in nice display (array/array/records)');
//     console.log(result.recordsets);
//     console.log('Show all records in recordset');
//     console.log(result.recordset);
//   }
//     catch (error) {

//       console.log(`Error connecting to database. Did you change the server name?`);

//       //uncomment to show the error while trying to connec

//       console.log('');

//       console.log(error);

//     } //catch

//   console.log('Done');
  
// };  //End of main

 

// main();

 
const sql = require("mssql");
require("msnodesqlv8");
const conn = new sql.Connection({
  database: "testDB",
  server: "Hal200\\SQLEXPRESS",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true
  }
});
conn.connect().then(() => {
  // ... sproc call, error catching, etc
  // example: https://github.com/patriksimek/node-mssql#request
});
