const Leaderboard = [
    {name: "P1", score: 96, level: 4},
    {name: "P2", score: 100, level: 5},
    {name:"P3", score: 36, level: 2},
];

const findAverageScore = (players) => players.length ? players.reduce
((sum, p) => sum + p.score, 0) / players.length : 0;

console.log(Leaderboard)
console.log(`Average score: ${findAverageScore(Leaderboard)}`);

function filterPlayers(players, minscore) {
    return players.filter(player => player.score > minscore);
}

const highScorers = filterPlayers(Leaderboard, 50);
console.log(highScorers);

function TopScorer(players) {
    return players.reduce((topPlayer, currentPlayer) => currentPlayer.score > topPlayer.score ? currentPlayer: topPlayer);
}

const topPlayer = TopScorer(Leaderboard);
console.log(topPlayer)

function GroupPlayer(players){
    const groups = {};
    players.forEach(player => {
        if(!groups[player.level]){
            groups[player.level] = [];
        }
        groups[player.level].push(player);
    });
    return groups;
}

const playerByLevel = GroupPlayer(Leaderboard);
console.log(playerByLevel);

async function UpdatedScores(players){
    return new Promise((resolve) =>{setTimeout(() =>{
        const updatedPlayers = players.map(player => ({
            ...player, score: player.score + Math.floor(Math.random()*50)- 10
        }));
        resolve(updatedPlayers);
    }, 10);
});
}

async function UpdatedScores() {
    console.log("Fetching updated scores....");
    const updatedPlayers = await UpdatedScores(Leaderboard);
    console.log("Updated players:",updatedPlayers);
}

UpdatedScores();