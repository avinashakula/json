const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors({
    origin: "*"
}));

const data = require("./mockData.json");
app.get('/mockData', (req, res)=>{
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
});

app.listen(port, ()=>{
    console.log("Port : "+port);
});


