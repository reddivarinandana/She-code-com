// Import the required modules
const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

// Create an instance of Express
const app = express();

app.use(cors(),express.json());
// Create a connection to the MySQL database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nandana@1289",
    database:'PYTHON'
});

app.get("/course",async(req,res) =>{
        var TopicsTable = `SELECT *  FROM CourseTable`;
        con.query(TopicsTable, function(err, result){
            if(err) throw err;
            // alert("Data added successfully!")
            res.status(200).send(result);
        })
})

app.get("/topics",async(req,res) =>{
    var TopicsTable = `SELECT *  FROM TopicsTable`;
    con.query(TopicsTable, function(err, result){
        if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
})

app.get("/subtopic",async(req,res) =>{
    var SubTopicTable = `SELECT *  FROM SubTopicTable`;
    con.query(SubTopicTable, function(err, result){
        if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
})

app.get("/subTopicContent",async(req,res) =>{
    var SubTopicTable = `SELECT *  FROM SubTopicTable`;
    con.query(SubTopicTable, function(err, result){
        if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
})



const port = 5050;
app.listen(5050, () => {
    console.log(`Server running on port ${port}`);
  }); 
app.on('listening', function() {
    console.log('Express server started on port %s at %s', app.address().port, app.address().address);
});