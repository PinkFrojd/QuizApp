$(document).ready(function(){

    var arr = [];

    $("button.dodajPitanje").click(function(){
        var upit = {"Pitanje": "",
                        "A": "", "B": "",
                        "C": "", "D": ""};

        if($(".pitanje").val() == "" || $(".pitanje").val() == " "){
            alert("Nepotpuno pitanje")
            return false;
        }

        upit["Pitanje"] = $(".pitanje").val();

        $(".odgovor").each(function(index){
            if($(this).val() == "" || $(this).val() == " "){
                alert("Nepotpuni odgovori")
                return false;
            }
            switch (index){
                case 0:
                    upit["A"] = $(this).val();
                case 1:
                    upit["B"] = $(this).val();
                case 2:
                    upit["C"] = $(this).val();
                case 3:
                    upit["D"] = $(this).val();
            }
        });

        arr.push(upit);

        $(".odgovor").each(function(index){
            $(this).val("");
        })

        $(".pitanje").val("");

        console.log(arr);

    });

    $(".zavrsiKviz").click(function(){
        $.get("./js/data.json", function(data, status){
            console.log(data);
        });
    });

});
