const express = require('express');
const dotenv = require('dotenv').config();
port= process.env.PORT || 5000;

const app = express();  // launching the server

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=>{ 
    res.send("This works");
})

app.use('/api', require('./routes'));

app.listen(port, 
    function(error){
        if(error){
            console.log(`error in running file ${error} `);
        }
        console.log(`server is running on port ${port}`);
    }  
);
