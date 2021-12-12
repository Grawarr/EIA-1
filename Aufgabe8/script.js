//Erstmal alles lesen...
window.addEventListener("load", function () {
    //Variablen
    var samples = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
    var beat = [samples[0], samples[1], samples[2]];
    //Samples abspielen    
    function playSample(samples) {
        var audio = new Audio(samples);
        audio.play();
        alert("Ich wurde erkannt!");
    }
}
//Padbutton Funktionen -> Wieso erkennt er hier nicht die PlaySample funktion oben?
, 
//Padbutton Funktionen -> Wieso erkennt er hier nicht die PlaySample funktion oben?
document.querySelector("#Kick").addEventListener('click', function () { playSample(samples[0]); }));
document.querySelector("#Snare").addEventListener('click', function () { playSample(samples[1]); });
document.querySelector("#HiHat").addEventListener('click', function () { playSample(samples[2]); });
document.querySelector("#A").addEventListener('click', function () { playSample(samples[3]); });
document.querySelector("#C").addEventListener('click', function () { playSample(samples[4]); });
document.querySelector("#F").addEventListener('click', function () { playSample(samples[5]); });
document.querySelector("#G").addEventListener('click', function () { playSample(samples[6]); });
document.querySelector("#Laugh1").addEventListener('click', function () { playSample(samples[7]); });
document.querySelector("#Laugh2").addEventListener('click', function () { playSample(samples[8]); });
//keybindings
document.addEventListener('keydown', function (event) {
    if (event.key == "7") {
        playSample(samples[0]);
    }
    else if (event.key == "8") {
        playSample(Snare);
    }
    else if (event.key == "9") {
        playSample(HiHat);
    }
    else if (event.key == "4") {
        playSample(A);
    }
    else if (event.key == "5") {
        playSample(C);
    }
    else if (event.key == "6") {
        playSample(F);
    }
    else if (event.key == "1") {
        playSample(G);
    }
    else if (event.key == "2") {
        playSample(Laugh1);
    }
    else if (event.key == "3") {
        playSample(Laugh2);
    }
});
;
//# sourceMappingURL=A7_javascript.js.map
//# sourceMappingURL=script.js.map