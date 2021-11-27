window.addEventListener("load", function () {
    var Kick = new Audio('assets/kick.mp3');
    var Snare = new Audio('assets/snare.mp3');
    var HiHat = new Audio('assets/hihat.mp3');
    var A = new Audio('assets/A.mp3');
    var C = new Audio('assets/C.mp3');
    var F = new Audio('assets/F.mp3');
    var G = new Audio('assets/G.mp3');
    var Laugh1 = new Audio('assets/laugh-1.mp3');
    var Laugh2 = new Audio('assets/laugh-2.mp3');
    
    function playSample(sound) {
        sound.play();
    }

    document.querySelector("#Kick").addEventListener('click', function () { playSample(Kick); });
    document.querySelector("#Snare").addEventListener('click', function () { playSample(Snare); });
    document.querySelector("#HiHat").addEventListener('click', function () { playSample(HiHat); });
    document.querySelector("#A").addEventListener('click', function () { playSample(A); });
    document.querySelector("#C").addEventListener('click', function () { playSample(C); });
    document.querySelector("#F").addEventListener('click', function () { playSample(F); });
    document.querySelector("#G").addEventListener('click', function () { playSample(G); });
    document.querySelector("#Laugh1").addEventListener('click', function () { playSample(Laugh1); });
    document.querySelector("#Laugh2").addEventListener('click', function () { playSample(Laugh2); });

    let Beat: string [] = [Kick, Snare, HiHat];

    document.querySelector("#PlayButton").addEventListener('click', playBeat);

    function playBeat() {
    setInterval(function() {
        Beat[0].play ();
    }, 2000);
    setInterval(function() {
        Beat[1].play ();
    }, 1000);
    setInterval(function() {
        Beat[2].play ();
    }, 500);
    }

    document.addEventListener('keydown', function (event) {
        if (event.key == "7") {
            playSample(Kick);
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

})