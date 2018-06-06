$(document).ready(function(){

    var arr = [];
    var slijed = 1;
    var tocno = 0;
    var netocno = 0;
    $.get("./js/data.json", function(data, status){
        arr = data;

        for (var i = data.length - 1; i >= 0; i--) {
            var row = $("<div class='row'></div>");
            row.append() // Nastavit sa dinamičkim pravljenjem kvizova
        }
    });



});
