const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');  
  res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Methods', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


if (process.env.NODE_ENV === 'production'){
  app.use(express.static("taskassigner/build"));

  app.get('*', (req, res)=>{
    res.send(path.resolve(__dirname, 'taskassigner', 'build', 'index.html'));
  })
}

//page not found with 404
app.use((req, res, next)=>{
	var err = new Error('Page not Found');
	err.status = 404;
	next(err)
});

//handling errors
app.use((err, req, res, next)=>{
	res.status(err.status || 500);
	res.send(err.message);
})


const port = process.env.PORT || process.env.APP_PORT || 5000;

app.listen(port, ()=>console.log('server stared at port ' + port ));