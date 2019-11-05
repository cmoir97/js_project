use missions;
db.dropDatabase.();

db.missions.insertMany([
  {
    name: "EagleSat",
    description: "Take high quality images of Jupiter.",
    budget: 20000000
  },

])
