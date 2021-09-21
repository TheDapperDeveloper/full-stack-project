const Sequelize = require("sequelize");
const {Users} = require("./models");
const {Trips} = require("./models")
const {Itineraries} = require ("./models")

const express = require("express");
const cookie_parser = require('cookie-parser')
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookie_parser('abcdef'))

app.post("/register", async (req, res) => {
    const { firstName, lastName, username, password } = req.body;
    const newUser = await Users.create ({
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
    });
    res.send(`Inserted ${newUser.firstName} into table`)
});

// app.get("/login", async (req,res) => {

// })

app.post("/view_trips", async(req, res) => {
    const tripInfo = await Trips.findAll();
    res.send(tripInfo);
});

app.post("/view_itinerary/:userID", async (req, res) => {
    const { userID } = req.params;
    const itinerary = await Itineraries.findAll({
        where: {
            userID: userID
        }
    });
    res.json(itinerary);
});

app.post("/update_trip/:tripID", async(req, res) => {
    const { tripID } = req.params;
    const itinerary = await Itineraries.update(req.body, {
        where: {
            tripID:tripID
        }
    });
    res.send(itinerary);
});

app.post("/delete_trip/:tripID", async(req, res) => {
    const { tripID } = req.params;
    const tripInfo = await Itineraries.destroy({
        where: {
            tripID:tripID
        }
    });
    res.send("Deleted");
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));