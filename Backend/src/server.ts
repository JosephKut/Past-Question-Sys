import express from 'express';
import cors from 'cors';
const port = 3000;

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.get('/', (req, res) => {
    res.send("hello world");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})