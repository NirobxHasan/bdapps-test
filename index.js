const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 5000;
const app = express();
require('dotenv').config()
//middleware
app.use(cors());
app.use(express.json())



app.get('/',(req,res)=>{
    res.send('welcome to robi api')
})



app.listen(port,()=>{
    console.log('Listening from port:',port);
})
