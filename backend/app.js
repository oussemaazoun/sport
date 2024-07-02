/*************** Modules Importation ************/
// import express module
const express = require("express");
// import body parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
// import bcrypt
const bcrypt = require("bcrypt");
// sportDB => data base name
mongoose.connect("mongodb://127.0.0.1:27017/sportDB");

/*************** Express Application ************/
// creates express application
const app = express();

/*************** Models importation  ************/

const Match = require("./models/match");
const Player = require("./models/player");
const Team = require("./models/team");
const User = require("./models/user");
/*************** App Configuration ************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );

  next();
});

/*************** Business Logics ************/
//  Business Logic :Signup
app.post("/api/users", (req, res) => {
  console.log("here into signup", req.body);
  User.findOne({ email: req.body.email }).then((response) => {
    console.log(response);
    if (!response) {
      bcrypt.hash(req.body.pwd,10).then((cryptedPwd)=>{
        req.body.pwd=cryptedPwd;
        let userObj = new User(req.body);
      userObj.save();
      res.json({ isAdded: true });
      });
      
    } else {
      res.json({ isAdded: false });
    }
  });
});
// Business Logic: search
app.post("/api/matches/search", (req, res) => {
  // Instructions
  let searchTab = [];
  for (let i = 0; i < matchesTab.length; i++) {
    if (
      matchesTab[i].scoreOne == req.body.scoreOne ||
      matchesTab[i].scoreTwo == req.body.scoreTwo
    ) {
      searchTab.push(matchesTab[i]);
    }
  }
  res.json({ searchT: searchTab });
});
// Business Logic: Add Match
app.post("/api/matches", (req, res) => {
  // Instructions
  let matchObj = new Match(req.body);
  matchObj.save();
  res.json({ isAdded: true });
});

// Business Logic: Edit Match
app.put("/api/matches", (req, res) => {
  // Instructions
  Match.updateOne({ _id: req.body._id }, req.body).then((result) => {
    if (result.nModified == 1) {
      res.json({ isEdited: true });
    } else {
      res.json({ isEdited: false });
    }
  });
});

// Business Logic: Get All Matches
app.get("/api/matches", (req, res) => {
  // Instructions
  Match.find().then((docs) => {
    res.json({ matches: docs });
  });
});

// Business Logic: Delete Match By ID
app.delete("/api/matches/:id", (req, res) => {
  // Instructions
  console.log("Here into BL: Delete Match By ID");
  Match.deleteOne({ _id: req.params.id }).then((result) => {
    if (result.deletedCount == 1) {
      res.json({ isDelited: true });
    } else {
      res.json({ isDelited: false });
    }
  });
});

// Business Logic: Get Match By ID
app.get("/api/matches/:id", (req, res) => {
  // Instructions
  Match.findById(req.params.id).then((doc) => {
    res.json({ matche: doc });
  });
});

// Business Logic: Add Team
app.post("/api/teams", (req, res) => {
  let teamObj = new Team(req.body);
  teamObj.save();
  res.json({ isAdded: true });
});

// Business Logic: Edit Team
app.put("/api/teams", (req, res) => {
  // Instructions
  Team.updateOne({ _id: req.body._id }, req.body).then((result) => {
    if (result.nModified == 1) {
      res.json({ isEdited: true });
    } else {
      res.json({ isEdited: false });
    }
  });
});

// Business Logic: Get All Teams
app.get("/api/Teams", (req, res) => {
  Team.find().then((docs) => {
    res.json({ teams: docs });
  });
});

// Business Logic: Delete Team By ID
app.delete("/api/teams/:id", (req, res) => {
  // Instructions
  Team.deleteOne({ _id: req.params._id }).then((result) => {
    if (result.deletedCount == 1) {
      res.json((isDelited = true));
    } else {
      res.json((isDelited = false));
    }
  });
});

// Business Logic: Get Team By ID
app.get("/api/teams/:id", (req, res) => {
  // Instructions
  Team.findById(req.params.id).then((doc) => {
    res.json({ team: doc });
  });
});

// Business Logic: Add Player
app.post("/api/players", (req, res) => {
  let playerObj = new Player(req.body);
  playerObj.save();
  res.json({ isAdded: true });
});

// Business Logic: Edit Player
app.put("/api/players", (req, res) => {
  // Instructions
  Player.updateOne({ _id: req.body._id }, req.body).then((result) => {
    if (result.nModified == 1) {
      res.json({ isEdited: true });
    } else {
      res.json({ isEdited: false });
    }
  });
});

// Business Logic: Get All Players
app.get("/api/players", (req, res) => {
  // Instructions
  Player.find().then((docs) => {
    res.json({ players: docs });
  });
});

// Business Logic: Delete Player By ID
app.delete("/api/players/:id", (req, res) => {
  // Instructions
  Player.deleteOne({ _id: req.params._id }).then((result) => {
    if (result.deletedCount == 1) {
      res.json((isDelited = true));
    } else {
      res.json((isDelited = false));
    }
  });
});

// Business Logic: Get Player By ID
app.get("/api/players/:id", (req, res) => {
  // Instructions
  Player.findById(req.params.id).then((doc) => {
    res.json({ player: doc });
  });
});

/*************** App Exportation ************/
// make app importable
module.exports = app;
