class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
        this.Score1 = 0;
        this.Score2 = 0
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    Player1Score(){
        database.ref('Score1').on("value",(data)=>{
            Score1 = data.val()
        })
    }

    Player2Score(){
        database.ref('Score2').on("value",(data)=>{
            Score2 = data.val()
        })
    }

    static updatePlayer1Score(s1){
        database.ref('/').update({
            Score1: s1
        })
    }

    static updatePlayer2Score(s2){
        database.ref('/').update({
            Score2: s2
        })
    }
    
}
