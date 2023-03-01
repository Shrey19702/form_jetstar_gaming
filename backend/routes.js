const express = require('express')
const router = express.Router();

router.get('/order-data', (req,res)=>{
    res.json({
        order_id: 505,
        date: "21/02/2023",
        order: [{id: 101, name: "god of war", rent: 700, rent_time: "21/03/2023"},
                {id: 102, name: "spiderman", rent: 750, rent_time: "21/03/2023"},
                {id: 103, name: "last of us", rent: 650, rent_time: "21/03/2023"}]
    })
})

router.post('/order-details', (req, res)=>{ 
    res.json(req.body);
})

module.exports = router;