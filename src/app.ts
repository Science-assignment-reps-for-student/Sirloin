import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send({"status":"OK"})
})

app.listen(5000, () => {
    console.log("* Running on http://127.0.0.1:5000/")
})