const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date);
// console.log(date());

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

var initialItems = ["buy keyboard", "buy sheets", "play music"];

var workItems = [];

app.get("/", function (req, res) {
    // res.send("hello.");
    // var today = new Date();
    // var currentDay = today.getDay();
    // var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // var day = days[currentDay];

    // var options = {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long"
    // };

    // var day = today.toLocaleDateString("en-us", options);
    var day = date.getDate();

    // if(currentDay === 0 || currentDay === 6) {
    //     day = "Weekend";
    //     // res.send("itsaWeekend");
    // }
    // else {
    //     day = "Weekday";
    //     // res.send("itsaWeekday");
    // }

    res.render("list", {listTitle: day, newListItems: initialItems});

});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    // console.log(item);
    // initialItems.push(item);
    // res.render("list", {});
    // res.redirect("/");

    // console.log(req.body);
    
    if (req.body.list === "work") {
        workItems.push(item);
        res.redirect("/work");    
    } else {
        initialItems.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", {listTitle: "work", newListItems: workItems});
});

// app.post("/work", function (req, res) {
//     let item = req.body.newItem;
// });

app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("server available on port 3000");
});