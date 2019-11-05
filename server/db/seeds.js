use missions;
db.dropDatabase.();

db.missions.insertMany([
  {
    name: "EagleSat",
    description: "Take high quality images of Jupiter.",
    budget: 20000000
  },
  {
    name: "ZsoltSat",
    description: "Take high quality images of some Good Stuff",
    budget: 50000000
  }

])
