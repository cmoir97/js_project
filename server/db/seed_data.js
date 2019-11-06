use spacexServer;
db.dropDatabase.();


db.missions.insertMany([
  {
    name: "EagleSat",
    description: "Take high quality images of Jupiter.",
    budget: 20000000
  },
  {
    name: "ZsoltSat",
    description: "Take high quality images of some Good Stuff.",
    budget: 50000000
  },
  {
    name: "MuskSat",
    description: "Maintain geostationary orbit.",
    budget: 10000000
  },
  {
    name: "HaggisSat",
    description: "Improve radio signal to Shetland.",
    budget: 3000000
  },
  {
    name: "PuffinSat",
    description: "Improve TV signal to Rockall.",
    budget: 5000000
  }

])
