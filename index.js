const Sequelize = require("sequelize");
const {userRegistration} = require("./models");
const {trips} = require("./models")
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/register", async (req, res) => {
    const { firstName, lastName, userName, password } = req.body;
    const newUser = await userRegistration.create ({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password,
    });
    res.send(`Inserted ${newUser.firstName} into table`)
})

app.post("/view_trips", async(req, res) => {
    const tripInfo = await trips.findAll();
    res.send(tripInfo);
});

app.post("/update_trip/:id", async(req, res) => {
    const tripInfo = await trips.update(req.body, {
        where: {
            id:req.params.id
        }
    });
    res.send(tripInfo);
});

app.post("/delete_trip/:id", async(req, res) => {
    const tripInfo = await trips.destroy({
        where: {
            id:req.params.id
        }
    });
    res.send("Deleted");
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));