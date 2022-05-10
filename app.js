// const apiData = [
// 	{
// 		"ranking": "1st",
// 		"id": 666786,
// 		"first_name": "Ja",
// 		"height_feet": 6,
// 		"height_inches": 3,
// 		"weight_pounds": 174,
// 		"last_name": "Morant",
//         "PER": 24.53,
// 		"position": "G",
// 		"team": {
// 			"id": 15,
// 			"abbreviation": "MEM",
// 			"city": "Memphis",
// 			"conference": "West",
// 			"division": "Southwest",
// 			"full_name": "Memphis Grizzlies",
// 			"name": "Grizzlies",
// 		},
// 	},
// 	{
// 		"ranking": "2nd",
// 		"id": 15,
// 		"first_name": "Giannis",
// 		"height_feet": 6,
// 		"height_inches": 11,
// 		"weight_pounds": 242,
// 		"last_name": "Antetokounmpo",
//         "PER": 32.1,
// 		"position": "F",
// 		"team": {
// 			"id": 17,
// 			"abbreviation": "MIL",
// 			"city": "Milwaukee",
// 			"conference": "East",
// 			"division": "Central",
// 			"full_name": "Milwaukee Bucks",
// 			"name": "Bucks",
// 		},
// 	},
// 	{
// 		"ranking": "3rd",
// 		"id": 246,
// 		"first_name": "Nikola",
// 		"height_feet": 7,
// 		"height_inches": 0,
// 		"weight_pounds": 250,
// 		"last_name": "Jokic",
//         "PER": 32.8,
// 		"position": "C",
// 		"team": {
// 			"id": 8,
// 			"abbreviation": "DEN",
// 			"city": "Denver",
// 			"conference": "West",
// 			"division": "Northwest",
// 			"full_name": "Denver Nuggets",
// 			"name": "Nuggets",
// 		},
// 	},
// 	{
// 		"ranking": "4th",
// 		"id": 237,
// 		"first_name": "LeBron",
// 		"height_feet": 6,
// 		"height_inches": 8,
// 		"weight_pounds": 250,
// 		"last_name": "James",
//         "PER": 26.2,
// 		"position": "F",
// 		"team": {
// 			"id": 14,
// 			"abbreviation": "LAL",
// 			"city": "Los Angeles",
// 			"conference": "West",
// 			"division": "Pacific",
// 			"full_name": "Los Angeles Lakers",
// 			"name": "Lakers",
// 		},
// 	},
// 	{
// 		"ranking": "5th",
// 		"id": 145,
// 		"first_name": "Joel",
// 		"height_feet": 7,
// 		"height_inches": 0,
// 		"weight_pounds": 250,
// 		"last_name": "Embiid",
//         "PER": 31.24,
// 		"position": "F-C",
// 		"team": {
// 			"id": 23,
// 			"abbreviation": "PHI",
// 			"city": "Philadelphia",
// 			"conference": "East",
// 			"division": "Atlantic",
// 			"full_name": "Philadelphia 76ers",
// 			"name": "76ers",
// 		},
// 	},
// 	{
// 		"ranking": "6th",
// 		"id": 57,
// 		"first_name": "Devin",
// 		"height_feet": 6,
// 		"height_inches": 6,
// 		"weight_pounds": 210,
// 		"last_name": "Booker",
//         "PER": 21.3,
// 		"position": "G",
// 		"team": {
// 			"id": 24,
// 			"abbreviation": "PHX",
// 			"city": "Phoenix",
// 			"conference": "West",
// 			"division": "Pacific",
// 			"full_name": "Phoenix Suns",
// 			"name": "Suns",
// 		},
// 	},
// 	{
// 		"ranking": "7th",
// 		"id": 115,
// 		"first_name": "Stephen",
// 		"height_feet": 6,
// 		"height_inches": 3,
// 		"weight_pounds": 190,
// 		"last_name": "Curry",
//         "PER": 21.4,
// 		"position": "G",
// 		"team": {
// 			"id": 10,
// 			"abbreviation": "GSW",
// 			"city": "Golden State",
// 			"conference": "West",
// 			"division": "Pacific",
// 			"full_name": "Golden State Warriors",
// 			"name": "Warriors",
// 		},
// 	},
// 	{
// 		"ranking": "8th",
// 		"id": 434,
// 		"first_name": "Jayson",
// 		"height_feet": 6,
// 		"height_inches": 8,
// 		"weight_pounds": 208,
// 		"last_name": "Tatum",
//         "PER": 21.8,
// 		"position": "F",
// 		"team": {
// 			"id": 2,
// 			"abbreviation": "BOS",
// 			"city": "Boston",
// 			"conference": "East",
// 			"division": "Atlantic",
// 			"full_name": "Boston Celtics",
// 			"name": "Celtics",
// 		},
// 	},
//     {
//         "ranking": "9th",
// 		"id": 367,
// 		"first_name": "Chris",
// 		"height_feet": 6,
// 		"height_inches": 0,
//         "weight_pounds": 175,
// 		"last_name": "Paul",
//         "PER": 20.8,
// 		"position": "G",
// 		"team": {
// 			"id": 24,
// 			"abbreviation": "PHX",
// 			"city": "Phoenix",
// 			"conference": "West",
// 			"division": "Pacific",
// 			"full_name": "Phoenix Suns",
// 			"name": "Suns",
// 		},
// 	},
// 	{
// 		"ranking": "10th",
// 		"id": 132,
// 		"first_name": "Luka",
// 		"height_feet": 6,
// 		"height_inches": 7,
// 		"weight_pounds": 218,
// 		"last_name": "Doncic",
//         "PER": 25.1,
// 		"position": "F-G",
// 		"team": {
// 			"id": 7,
// 			"abbreviation": "DAL",
// 			"city": "Dallas",
// 			"conference": "West",
// 			"division": "Southwest",
// 			"full_name": "Dallas Mavericks",
// 			"name": "Mavericks",
// 		},
// 	},
// ]
const URL = "https://www.balldontlie.io/api/v1/players"

// Cached Elements

const $getPlayerInfo = $("#getPlayerInfo");

// get API data
function getInfo() {
const randomIndex = Math.floor(Math.random * apiData.length);
const player = apiData[randomIndex];
console.log(player);
}

// Event Listener
$getPlayerInfo.on("click", getInfo);