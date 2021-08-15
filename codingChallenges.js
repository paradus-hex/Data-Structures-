// 'use strict';
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // //codingChallenge1
// // //Deconstructing arrays,objects,spread&rest operator,short-circuit &,or.
// // // The best way
// // //First task
// // const [players1, players2] = game.players;
// // console.log(players1, players2);

// // //Second task
// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // //Third task
// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // //Fourth Task
// // const player1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
// // console.log(player1Final);

// // //Fifth Task
// // let { team1, x: Draw, team2 } = game.odds;
// // console.log(team1, Draw, team2);
// // //alternate method
// // // const {
// // //   odds: { team1, x: Draw, team2 },
// // // } = game;
// // // console.log(team1, Draw, team2);

// // //Sixth Task
// // const printGoals = function (...inputPlayers) {
// //   let noOfScorers = inputPlayers.length;
// //   for (let i = 0; i < noOfScorers; i++) {
// //     console.log(inputPlayers[i]);
// //   }
// //   console.log(noOfScorers);
// // };
// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals(...['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels']);

// // //Seventh Task
// // team1 < team2 && console.log('Bayern Munich Wins!');
// // team2 < team1 && console.log('Borusia Dortmund Wins!');

// // //First Try(Very Messy)
// // // const players1 = [...game.players[0]];
// // // const players2 = [...game.players[1]];
// // // console.log(players1);
// // // const [gk, ...fieldPlayers] = [...players1]; // spread then rest(pack)
// // // console.log(gk, fieldPlayers);
// // // const allPlayers = [...players1, ...players2];
// // // console.log(allPlayers);
// // // const player1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
// // // console.log(player1Final);

// // // const { team1, x: Draw, team2 } = game.odds;
// // // console.log(team1, Draw, team2);
// // // // let sum;
// // // const printGoals = function (...players) {
// // //   let goalCounter = 0;
// // //   console.log(players);
// // //   for (let i = 0; i < players.length; i++) {
// // //     console.log(players[i]);

// // //     for (let j = 0; j < game.scored.length; j++) {
// // //       players[i] === game.scored[j] ?goalCounter++ : (goalCounter = goalCounter);
// // //     }
// // //   }
// // //   console.log(goalCounter);
// // // };
// // // printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

// // // const team2isWinner = team1 < team2;
// // // const winner = team2isWinner || 'Team 1 is winner';
// // // console.log(winner);

// //codingChallenge2
// //For of loop,enhanced object literals,optional chaining
// //Best Method:
// //Task1
// for (const [goalNo, scorer] of game.scored.entries()) {
//   //for of gives the array values;for in gives the index value.
//   console.log(`Goal ${goalNo}: ${scorer}`);
// }

// //Task2
// let sum = 0;
// const oddsValuesArr = Object.values(game.odds);
// for (const oddValue of oddsValuesArr) {
//   sum += oddValue;
// }
// console.log(`Average odd:${sum / oddsValuesArr.length}`);

// //Task3
// //My 2nd try
// // const oddsArr = Object.entries(game.odds);
// // let team;
// // for (const [teamName, odd] of oddsArr) {
// //   console.log(`Team name ${teamName}`);
// //   teamName === 'x' ? (team = 'Draw') : (team = game[teamName]); //No idea why this works
// //   console.log(`Odd of victory ${team}:  ${odd}`);
// // }
// //Jonas
// // for (const [team, odd] of Object.entries(game.odds)) {
// //   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`; //why the fuck is it not game.team????probably has something to with heap as they dont refer to same address anymore
// //   console.log(`Odd of ${teamStr} ${odd}`);
// // }

// // // BONUS
// // // So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// // const scorers = {};
// // for (const player of game.scored) {
// //   scorers[player] ? scorers[player]++ : (scorers[player] = 1); //how the fuck does this shi work!!!!!!!ARGHHHHHgg
// // }
// // console.log(scorers);

// // //My try
// // //Task1
// // for (const scorer in game.scored) {
// //   console.log(`Goal ${Number(scorer) + 1}: ${game.scored[scorer]}`);
// // }

// // //Task2
// // let sum = 0;
// // const entriesOfOdd = Object.entries(game.odds);
// // console.log(entriesOfOdd);
// // const calcAverage = function () {
// //   for (const [, odd] of entriesOfOdd) {
// //     sum += odd;
// //   }
// //   console.log(`Average of odds=${sum / entriesOfOdd.length}`);
// // };
// // calcAverage();

// // //Task3
// // console.log(`Odds of victory ${game.team1}: ${game.odds.team1}`);
// // console.log(`Odds of Draw: ${game.odds.x}`);
// // console.log(`Odds of victory ${game.team2}: ${game.odds.team2}`);

// // //Bonus

// // const a = [4, 3, 6, 3, 4, 3];
// // console.log(a);

// // function count_duplicate(a) {
// //   let counts = {};

// //   for (let i = 0; i < a.length; i++) {
// //     if (counts[a[i]]) {
// //       console.log(counts[a[i]]);
// //       counts[a[i]] += 1;
// //       // console.log(counts[a[i]]);
// //     } else {
// //       console.log(counts[a[i]]);
// //       counts[a[i]] = 1;
// //       // console.log(counts[a[i]]);
// //     }
// //   }
// //   console.log(counts);
// // }
// // count_duplicate(a);

// // const scorersGenerator = function (scorerArray) {
// //   let scorersObject = {};

// //   for (let i = 0; i < scorerArray.length; i++) {
// //     if (scorersObject[scorerArray[i]]) {
// //       scorersObject[scorerArray[i]] += 1;
// //     } else {
// //       scorersObject[scorerArray[i]] = 1;
// //     }
// //   }
// //   console.log(scorersObject);
// // };

// // scorersGenerator(game.scored);
// // console.log(...game.scored.entries());

// // ///////////////////////////////////////
// // // Looping Objects: Object Keys, Values, and Entries

// // // Property NAMES
// // // const properties = Object.keys(openingHours);
// // // console.log(properties);

// // // let openStr = `We are open on ${properties.length} days: `;
// // // for (const day of properties) {
// // //   openStr += `${day}, `;
// // // }
// // // console.log(openStr);

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // //codingChallenge3
// // //sets and maps

// // //Task1
// // const events = [...new Set(gameEvents.values())];
// // console.log(events);

// // //Task2
// // gameEvents.delete(64);
// // console.log(gameEvents);

// // //Task3
// // const eventsArray = [...gameEvents.keys()];
// // console.log(
// //   `An event happened, on average, every ${90 / eventsArray.length} minutes`
// // );
// // console.log(
// //   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// // );

// // //Task4
// // for (const [eventKey, eventValue] of gameEvents) {
// //   eventKey <= 45
// //     ? console.log(`[First Half]${eventKey}: ${eventValue}`)
// //     : console.log(`[Second Half]${eventKey}: ${eventValue}`);
// // }

// // for (const [eventKey, eventValue] of gameEvents) {
// //   const half = eventKey <= 45 ? 'First' : 'Second';
// //   console.log(`[${half} Half] ${eventKey}:${eventValue}`);
// // }

//CodingChallenge4
//Working with strings
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//Jonas method

document.querySelector('button').addEventListener('click', function () {
  // const textArea = document.querySelector('textarea').value;
  // console.log(textArea);//it's getting formatted
  const textArea =
    'underscore_case\n first_name\nSome_Variable\n calculate_AGE\ndelayed_departure';
  const textArray = textArea.split('\n');
  for (const [i, underWord] of textArray.entries()) {
    //that's how you get index in for of loop
    const [firstPart, secondPart] = underWord.toLowerCase().trim().split('_');
    const camelStr = `${firstPart}${secondPart.replace(
      secondPart[0],
      secondPart[0].toUpperCase()
    )}`;
    console.log(camelStr.padEnd(20) + `${'✅'.repeat(i + 1)}`);
  }
});

// //My first try

// const textArea =
//   'underscore_case\n first_name\nSome_Variable\n calculate_AGE\ndelayed_departure';

// const textArray = textArea.split('\n');
// for (i = 0; i < textArray.length; i++) {
//   let tempWord = textArray[i].toLowerCase();
//   let camelCaseWord = (
//     tempWord.slice(0, tempWord.indexOf('_')) +
//     tempWord.slice(tempWord.lastIndexOf('_') + 1)[0].toUpperCase() +
//     tempWord.slice(tempWord.lastIndexOf('_') + 2)
//   ).trim();
//   camelCaseWord = camelCaseWord.padEnd(20, ' ') + `${'✅'.repeat(i + 1)}`;
//   console.log(camelCaseWord);
// }
