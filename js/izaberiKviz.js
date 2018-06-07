$(document).ready(function(){

    var arr = [];
    var slijed = 1;
    var tocno = 0;
    var netocno = 0;
    $.get("./js/data.json", function(data, status){
        arr = data;
        for (var i = 0; i < Object.keys(arr).length; i++) {

            var row = $("<div class='row'></div>");
            var col = $("<div class='col-lg-12 poravnanjeCenter'></div>");
            var card = $("<div class='card text-white bg-primary'></div>");
            var cardB = $("<div class='card-body'></div>");
            var h4 = $("<h4 class='card-title nazivPitanja'></div>");
            var anchor = $("<a></a>");
            anchor.append(data[i]["nazivKviza"]);
            anchor.attr("href", "./igrajKviz.html#kviz=" + i);
            anchor.addClass("text-white");
            h4.append(anchor);
            cardB.append(h4);
            card.append(cardB);
            col.append(card);
            row.append(col);
            $(".container-fluid").append(row);

    }



    });



});
