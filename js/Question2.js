const athletes = [
  {
    name: "Alan",

    steps: [3100, 4100, 5100, 6100],
    rating: "Average",
  },

  {
    name: "Becky",

    steps: [14200, 15200, 16200, 17200],
    rating: ["Excellent"],
  },

  {
    name: "Cindy",

    steps: [7300, 8300, 9300, 10300, 11300],
    rating: ["Better"],
  },

  {
    name: "Derek",

    steps: [2400, 3400, 4400, 5400],
    rating: "Average",
  },

  {
    name: "Ellen",

    steps: [4500, 5500, 6500, 7500],
    rating: ["Better"],
  },

  {
    name: "Fred",

    steps: [16600, 17600, 18600, 19600],
    rating: ["Excellent"],
  },

  {
    name: "Gary",

    steps: [7700, 8700, 9700, 10700, 11700],
    rating: ["Better"],
  },

  {
    name: "Helen",

    steps: [11800, 12800, 13800, 14800],
    rating: ["Excellent"],
  },
];

//part 1: Average Steps

const summaryArray = athletes.map((ath) => {
  return {
    daysWalked: ath.steps.length,
    avgScore: ath.steps.reduce((acc, x) => acc + x, 0) / ath.steps.length,
  };
});
console.log(summaryArray);

// function athRating(){
//   summaryArray.forEach((avgScore) => {
//     if (avgScore < 5000) {
//           ath.rating.push('Average');
//         };
//     if (avgScore >= 5000 && avgScore < 1000) {
//           ath.rating.push('Better');
//         };
//     if (avgScore >= 10000) {
//           ath.rating.push('Excellent');
//         };
// });

// athRating();

// part 2

const athleteSummary = athletes.map((ath) => {
  return {
    name: ath.name,
    steps: ath.steps,
    daysWalked: ath.steps.length,
    avgScore: ath.steps.reduce((acc, x) => acc + x, 0) / ath.steps.length,
  };
});
console.log(athleteSummary);

// part 3
athleteSummary.forEach((ath) => {
  console.log(`Name: ${ath.name}`);
  console.log(`Average steps: ${ath.avgScore}`);
  console.log(`Days Walked: ${ath.daysWalked}`);
  console.log(`Steps: ${ath.steps}`);
});

// part 4

const avgAthlete = athletes.filter((ath) => {
  return ath.rating === "Average";
});

// part 5
console.log(avgAthlete);
