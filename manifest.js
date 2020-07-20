$(document).ready(function () {

    $("#random-button").on("click", function () {

        var Lottery = "";

        for (var i = 0; i < 9; i++) {

            var randomGenerate = Math.floor(Math.random() * 9) + 1;

            Lottery = randomGenerate + Lottery;

        }

        $("#random-number").prepend("<br><hr>" + Lottery);
    });
});