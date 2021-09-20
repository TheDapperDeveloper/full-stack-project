const Sequelize = require("sequelize");
const {userRegistration} = require("./models");
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

app.listen(PORT, console.log(`Listening on port ${PORT}`));