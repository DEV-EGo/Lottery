$(document).ready(function () {

    $("#random-button").on("click", function () {

        var Lottery = "";

        for (var i = 0; i < 9; i++) {

            var randomGenerate = Math.floor(Math.random() * 9) + 1;

            Lottery = randomGenerate + Lottery;

        }

        $("#random-number").prepend("<br><hr>" + Lottery);
        $("#image-div").html("<img src= 'https://i0.wp.com/newportbuzz.s3.amazonaws.com/uploads/2016/01/Powerball-Winning-Numbers.png?fit=650%2C400&ssl=1' />");

        alert("CONGRATULATIONS");
    });
});