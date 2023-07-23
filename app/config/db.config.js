// module.exports = {
//     HOST: "HAL200",
//     USER: "Dad",
//     //PASSWORD: "123456",
//     DB: "testDB",
//     dialect: "mssql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };

  // const  config = {
  //   user:  "Dad", // sql user
  //   password:  '', //sql user password
  //   server:  'HAL200\\SQLEXPRESS', // if it does not work try- localhost
  //   database:  'testDB',
  //   options: {
  //     trustedconnection:  true,
  //     encrypt: true,
  //     trustServerCertificate: true,
  //     //enableArithAbort:  true,
  //     //instancename:  "HAL200\\SQLEXPRESS"  // SQL Server instance name
  //   },
  //   port:  1433
  // }
  
  // module.exports = config;

  const sql = require("mssql/msnodesqlv8");

  const config = {
    server:  'hal200\\SQLEXPRESS', // if it does not work try- localhost
    database:  'hal200\\testDB',
    driver: "msnodesqlv8",
    options: {
      trustedConnection: true, 
    },
  };
  
  const pool = new sql.ConnectionPool(config);
  
  pool.connect()
    .then((pool) => {
      console.log('Connected to the SQL Server database');
      
    })
    .catch((err) => {
      console.error('Error connecting to the SQL Server database:', err);
    });
  
  module.exports = pool;
    