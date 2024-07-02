/*************** Modules Importation ************/
// import express module
const express = require("express");
// import body parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
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
// fake Data Base
let matchesTab = [
  { id: 1, scoreOne: 2, scoreTwo: 3, teamOne: "RMD", teamTwo: "FCB" },
  { id: 2, scoreOne: 1, scoreTwo: 0, teamOne: "CA", teamTwo: "EST" },
  { id: 3, scoreOne: 0, scoreTwo: 2, teamOne: "JUV", teamTwo: "MIL" },
  { id: 4, scoreOne: 4, scoreTwo: 5, teamOne: "MCU", teamTwo: "MC" },
];
let teamsTab = [
  { id: 1, owner: "pirez", name: "RMD", foundation: "1920" },
  { id: 2, owner: "laporta", name: "FCB", foundation: "1922" },
  { id: 3, owner: "khalifi", name: "PSG", foundation: "1930" },
  { id: 4, owner: "meddeb", name: "EST", foundation: "1940" },
];

let playersTab = [
  { id: 1, name: "ronaldo", age: 38, position: "ATK", nbr: 10 },
  { id: 2, name: "messi", age: 37, position: "MID", nbr: 7 },
  { id: 3, name: "modric", age: 39, position: "MID", nbr: 8 },
  { id: 4, name: "kross", age: 34, position: "DEF", nbr: 10 },
];

function generateId(T) {
  let max;
  if (T.length == 0) {
    max = 0;
  } else {
    max = T[0].id;
    for (let i = 0; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;
      }
    }
  }
  return max + 1;
}

/*************** Business Logics ************/

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
  console.log("Here into BL: Edit Match");
  for (let i = 0; i < matchesTab.length; i++) {
    if (matchesTab[i].id == req.body.id) {
      matchesTab[i] = req.body;
      break;
    }
  }
  res.json({ isEdited: true });
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
  for (let i = 0; i < matchesTab.length; i++) {
    if (matchesTab[i].id == req.params.id) {
      matchesTab.splice(i, 1);
      res.json({ isDelited: true });
    }
  }
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
  console.log("Here into BL: Edit Team");
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
  console.log("Here into BL: Delete Team By ID");
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
  console.log("Here into BL: Edit player");
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
  console.log("Here into BL: Delete player By ID");
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
