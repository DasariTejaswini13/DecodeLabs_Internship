const express = require("express");

const app = express();
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Hello DecodeLabs , Backend is working!! 🚀");
});

// JSON API route (IMPORTANT)
app.get("/profile", (req, res) => {
    res.json({
        name: "Tejaswini",
        course: "Backend Development",
        college: "Engineering Student",
        status: "Learning Express"
    });
});
app.post("/profile", (req, res) => {

    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    res.json({
        message: "Profile received successfully",
        data: req.body
    });

});
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});