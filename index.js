const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const Characters = {
  tommypickles: {
    fullName: "Thomas Pickles",
    Age: 1,
    Personality: "Fearless, happy-go-lucky, brave, smart, kind",
    Quote: "A baby's gotta do what a baby's gotta do!",
    Enemies: "Angelica",
    image: "assets/Tommy_Pickles_in_Newer_Years.webp",
  },
  chuckiefinster: {
    fullName: "Charles Crandall Finster Jr. (III)",
    Age: 2,
    Personality:
      "Shy, timid, cowardly, brave (at times), friendly, nervous, anxious, bashful, loyal, nerdy, smart, stubborn",
    Quote: "I don't think this is such a good idea.",
    Enemies: "Angelica",
    image: "assets/Chuckie.webp",
  },
  phildevill: {
    fullName: "Phillip Richard William DeVille",
    Age: "1.5",
    Interests:
      "Devouring worms and bugs, Drinking toilet water,Playing with his friend",
    Quote: "Is too, Lillian!",
    Enemies: "Angelica",
    image: "assets/Phil_Deville-_oil_painted.webp",
  },
  lildeville: {
    fullName: "Lillian Marie Jill DeVille",
    Age: " 1 1/4",
    Interests:
      "Devouring worms and bugs,Drinking toilet wate, Playing with her friends",
    Quote: "Is not, Phillip",
    Enemies: "Angelica",
    image: "assets/Lil_DeVille.webp",
  },

  kimifinster: {
    fullName: "Kimi Finster",
    Age: "1 1/2",
    Interests:
      "Exploring, going on adventures",
    Quote: "I just love my new big brother.",
    Enemies: "Angelica",
    image: "assets/Kimi_Finster2.webp",
  },
  angelicapickles: {
    fullName: "Angelica Charlotte Pickles",
    Age: "4",
    Personality:
      "Bratty, spoiled, mean, selfish, greedy, conceited, loudmouthed, dishonest",
    Quote: "You dumb babies!",
    Enemies:
      "Susie Carmichael, Tommy Pickles, Chuckie Finster, Phil and Lil DeVille",
    image: "assets/Angelica_Pickles.webp",
  },
  susiecarmichael: {
    fullName: "Susanna Yvonne Carmichael",
    Age: "3 1/2",
    Interests: "Singing, pretending, imagining, dancing, playing, helping",
    Quote: "Hey! Leave them little kids alone!",
    Enemies: "Angelica",
    image: "assets/Susie_Carmichael_Oil_Painted.webp",
  },
  dilpickles: {
    fullName: "Dylan Prescott Pickles",
    Age: "3 months",
    Interests:
      "Pulling things,Grabbing items, Eating,Hitting people on the head with various objects ",
    Quote: "'yucky!', '(giggles)','gee...yucka','poopy!'",
    Enemies: "Angelica",
    image: "assets/Dil_Pickles.webp",
  },
}

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});
app.get("/api/:name", (request, response) => {
  const name = request.params.name.toLowerCase();
  if (Characters[name]) {
    response.json(Characters[name]);
  } else {
    response.json(Characters["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}.You better go catch it `);
});
