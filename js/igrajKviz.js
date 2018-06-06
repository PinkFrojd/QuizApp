$(document).ready(function(){

    var arr = [];
    var slijed = 1;
    var tocno = 0;
    var netocno = 0;
    $.get("./js/data.json", function(data, status){
        arr = data["Kviz_1"];

        var ukupnoPitanja = "Pitanje " + slijed + "/" + arr["ukupnoPitanja"];
        $(".brojPitanja").text(ukupnoPitanja);

        $(".nazivPitanja").text(arr["pitanja"][slijed - 1]["pitanje"]);

        $(".kartaA").text(arr["pitanja"][slijed - 1]["A"]);
        $(".kartaB").text(arr["pitanja"][slijed - 1]["B"]);
        $(".kartaC").text(arr["pitanja"][slijed - 1]["C"]);
        $(".kartaD").text(arr["pitanja"][slijed - 1]["D"]);

    });

    $(".odgovor").click(function(ev){
        var odg = $(this).find("h4").text();
        if (odg == arr["pitanja"][slijed - 1]["T"]){
            tocno++;
            $(this).find(".karta").addClass("bg-success");
            setTimeout(inc.bind(null, this), 2000);
            console.log("Tocno");
        }else{
            netocno++;
            $(this).find(".karta").addClass("bg-danger");
            setTimeout(dec.bind(null, this), 2000);
            console.log("Netocno");
        }
        slijed++;

        function inc(t){
            $(t).find(".karta").removeClass("bg-success");
            var ukupnoPitanja = "Pitanje " + slijed + "/" + arr["ukupnoPitanja"];
            $(".brojPitanja").text(ukupnoPitanja);

            $(".nazivPitanja").text(arr["pitanja"][slijed - 1]["pitanje"]);

            $(".kartaA").text(arr["pitanja"][slijed - 1]["A"]);
            $(".kartaB").text(arr["pitanja"][slijed - 1]["B"]);
            $(".kartaC").text(arr["pitanja"][slijed - 1]["C"]);
            $(".kartaD").text(arr["pitanja"][slijed - 1]["D"]);
        }

        function dec(t){
            $(t).find(".karta").removeClass("bg-danger");
            var ukupnoPitanja = "Pitanje " + slijed + "/" + arr["ukupnoPitanja"];
            $(".brojPitanja").text(ukupnoPitanja);

            $(".nazivPitanja").text(arr["pitanja"][slijed - 1]["pitanje"]);

            $(".kartaA").text(arr["pitanja"][slijed - 1]["A"]);
            $(".kartaB").text(arr["pitanja"][slijed - 1]["B"]);
            $(".kartaC").text(arr["pitanja"][slijed - 1]["C"]);
            $(".kartaD").text(arr["pitanja"][slijed - 1]["D"]);
        }

    });




});
