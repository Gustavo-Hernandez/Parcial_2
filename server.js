const express = require('express');
const PORT = 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res)=>{
    res.send("You are in homepage");
});

app.post("/post", (req, res)=>{
   res.send(`Welcome ${req.body.user}`);
});

app.delete("/delete", (req, res)=>{
    if (req.body.taskId) {
        return res.send({delete: true});
    }
    return res.send({delete: false});
});

app.put("/put/:id", (req,res)=>{
    res.send(`Task ${req.params.id} has been updated`);
});

app.listen(PORT, ()=>{
    console.log('Listening on port ' + PORT);
});