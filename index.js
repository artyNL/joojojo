const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
// Routers
const userRouter = require("./routes/UserRoute");

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static("public"));
app.use('/css', express.static(__dirname + "public/css"));
app.use('/js', express.static(__dirname + "public/js"));
app.use('/img', express.static(__dirname + "public/img"));

app.set("views", "./views");
app.set("view engine", "ejs");

// Define Routes
app.use("/auth", userRouter)

mongoose.connect(
    "mongodb+srv://arty:hijskraan66@cluster0.ojpmk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
).then(() => {
    console.log("Database is aan het luistern pssh!");
}
).catch((err) => {
    console.log(err)
});

app.get("/beroepsp4", (req, res) => {
    res.render("index");
})

app.get("/dashboard", (req, res) => {
    res.render("dashboard", {data: "gebruiker"});
})


app.listen(3000, () => {
    console.log("Backend server is aan het lopen!");
})