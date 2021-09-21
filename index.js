const Sequelize = require("sequelize");
const {Users} = require("./models");
const {Trips} = require("./models")
const {Itineraries} = require ("./models")
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/register", async (req, res) => {
    const { firstName, lastName, username, password } = req.body;
    const newUser = await Users.create ({
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
    });
    res.send(`Inserted ${newUser.firstName} into table`)
})

app.post("/view_trips", async(req, res) => {
    const tripInfo = await Trips.findAll();
    res.send(tripInfo);
});

app.post("/view_itinerary/:id", async (req, res) => {
    const itinerary = await Itineraries.findAll();
    res.json(itinerary);
});

app.post("/update_itinerary/:id", async(req, res) => {
    const tripInfo = await Itineraries.update(req.body, {
        where: {
            id:req.params.id
        }
    });
    res.send(tripInfo);
});

app.post("/delete_trip/:id", async(req, res) => {
    const tripInfo = await Itineraries.destroy({
        where: {
            id:req.params.id
        }
    });
    res.send("Deleted");
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));