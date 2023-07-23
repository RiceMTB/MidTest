var  config = require('../config/db.config');
const sql = require("mssql/msnodesqlv8");

async function  getAllJoke() { 
    try {
      
      let  all_joke = await  config.request().query("SELECT * from V_JOKE_PUNCHLINE");
      return  all_joke.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

module.exports = {
  getAllJoke:  getAllJoke,
}