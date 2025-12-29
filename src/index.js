import express from "express";
import path from "path";

const app = express();
const PORT = 8000;

app.use(express.static('public'));

app.get("/info", (req, res) => {
    res.json({
        "message": "Hello Form CampusConnect"
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

