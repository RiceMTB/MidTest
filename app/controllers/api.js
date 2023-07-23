var  Db = require('./dboperations');
var  Joke = require('../models/got_jokes');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);



router.use((request, response, next) => {
    console.log('middleware');
    next();
  });

router.route('/jokes').get((request, response) => {
 
    Db.getAllJoke().then((data) => {
    response.json(data[0]);
  })
  
})  
  
  
var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);