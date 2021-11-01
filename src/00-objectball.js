function gameObject(){
    const obj = { 
        home: {
            teamName: "Brooklyn Nets", 
            colors: "Black, White", 
            players:{
                "Alan Anderson":{
                    number: 0,
                    Shoe: 16,
                    Points:22,
                    Rebounds:12,
                    Assists:12,
                    Steals:3,
                    Blocks:1,
                    slamDunks:1
                },
                "Reggie Evans":{
                    number: 30,
                    Shoe: 14,
                    Points:12,
                    Rebounds:12,
                    Assists:12,
                    Steals:12,
                    Blocks:12,
                    slamDunks:7
                },
                "Brook Lopez":{
                    number: 11,
                    Shoe: 17,
                    Points:17,
                    Rebounds:19,
                    Assists:10,
                    Steals:3,
                    Blocks:1,
                    slamDunks:15
               },
               "Mason Plumlee":{
                number: 1,
                Shoe: 19,
                Points:26,
                Rebounds:12,
                Assists:6,
                Steals:3,
                Blocks:8,
                slamDunks:5
               },
               "Jason Terry":{
                number: 31,
                Shoe: 15,
                Points:19,
                Rebounds:2,
                Assists:2,
                Steals:4,
                Blocks:11,
                slamDunks:1
               }
            }
        },
        away: {
            teamName: "Charlotte Hornets", 
            colors: "Turquoise, Purole", 
            players:{
                "Jeff Adrien":{
                    Number : 4,
                    Shoe : 18,
                    Points:10,
                    Rebounds:1,
                    Assists:1,
                    Steals:2,
                    Blocks:7,
                    slamDunks:2
                },
                "Bismak Biyombo":{
                    number: 0,
                    Shoe: 16,
                    Points:12,
                    Rebounds:4,
                    Assists:7,
                    Steals:7,
                    Blocks:15,
                    slamDunks:10
                },
                "DeSagna Diop":{
                    number: 2,
                    Shoe: 14,
                    Points:24,
                    Rebounds:12,
                    Assists:12,
                    Steals:4,
                    Blocks:5,
                    slamDunks:5
                },
                "Ben Gordon":{
                    number: 8,
                    Shoe: 15,
                    Points:33,
                    Rebounds:3,
                    Assists:2,
                    Steals:1,
                    Blocks:1,
                    slamDunks:0
                },
                "Brendan Haywood":{
                    number: 33,
                    Shoe: 15,
                    Points:6,
                    Rebounds:12,
                    Assists:12,
                    Steals:22,
                    Blocks:5,
                    slamDunks:12
                }
            }
        }
    }
    return obj
}

const game = gameObject()
const players = playersObject()

function playersObject(){
    return {...game.home.players, ...game.away.players}
}


function homeTeamName(){
    let object = gameObject() 
    return object['home']['teamName']
}

function numPointsScored(name){
    players[name].points
}
console.log(homeTeamName())
//console.log(gameObject())

debugger;

