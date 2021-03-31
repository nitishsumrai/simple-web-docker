const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  return  res.send('bye popa');
});

app.listen(3000,(er)=>{
    if(er){
    return console.log('error in running server',er);
    }
    console.log('server is up and running on port : 3000');
});
