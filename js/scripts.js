// Interface
$(document).ready(function() {

  $("button#start").click(function(event){
    player1 = new Player(true);
    player2 =  new Player(false);
    $(".player-console").show();
    $(".start").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName=player1Name;
    player2.playerName=player2Name;

  });
  $("button#newGame").click(function(event){
    $(".player-console").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#roundTotalOne").empty();
    $("#totalScoreOne").empty();
    $("#dieRollOne").empty();
    $("#roundTotalTwo").empty();
    $("#totalScoreTwo").empty();
    $("#dieRollTwo").empty();
    $(".start").show();
  });

  $("button#player1-roll").click(function(event){
    player1.roll = throwdice();
    $("#dieRollOne").text(player1.roll);
    player1.rollone();
    $("#roundTotalOne").text(player1.tempscore);
  });

  $("button#player2-roll").click(function(event){
    player2.roll = throwdice();
    $("#dieRollTwo").text(player2.roll);
    player2.rollone();
    $("#roundTotalTwo").text(player2.tempscore);
  });

  $("button#player1-hold").click(function(event){
    player1.hold();
    $("#totalScoreOne").text(player1.totalscore);
    $("#roundTotalOne").empty();
    $("#dieRollOne").empty();
    player1.winnerCheck();
  });

  $("button#player2-hold").click(function(event){
    player2.hold();
    $("#totalScoreTwo").text(player2.totalscore);
    $("#roundTotalTwo").empty();
    $("#dieRollTwo").empty();
    player2.winnerCheck();
  });

});
