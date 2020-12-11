//Le bouton de la premiere ligne
const button = document.getElementById('btn');
const button2 = document.getElementById('btn2');

//Le div contenant les resultats avec le script
let Lesscript = document.getElementById('result');
let lescodes = [];


button.addEventListener("click", () => {
    
    let tempsaajouter =  document.getElementById('numbertoadd').value;
   
    //let lescodes = [];
    $.each($('#script').val().split(/\n/), function (i, line) {
        if (line) {
            lescodes.push(line);
        } else {
            lescodes.push("");
        }
    });

    for ( i = 1; i < lescodes.length; i=i+7) {

        let letest = lescodes[i].split(":"); 
        let lele = letest[1].split(",")
        lele[0]=Number(lele[0]) + Number(tempsaajouter);
        letest[1]=lele.join(",")
        lescodes[i]=letest.join(": ")

    }

    for ( i = 0; i < lescodes.length; i++) {

        //Creation et Insertion des lignes de code
        let span = document.createElement("span");
        let br = document.createElement("br");

        span.innerHTML = lescodes[i];
        Lesscript.appendChild(span);
        Lesscript.appendChild(br)
    }
})

button2.addEventListener("click", () => {

    let tempsaajouter =  document.getElementById('numbertoadd').value;
    for ( i = 1; i < lescodes.length; i=i+7) {

        let letest = lescodes[i].split(":"); 
        let lele = letest[1].split(",")
        lele[0]=Number(lele[0]) + Number(tempsaajouter);
        letest[1]=lele.join(",")
        lescodes[i]=letest.join(": ")

    }

    for ( i = 0; i < lescodes.length; i++) {

        //Creation et Insertion des lignes de code
        let span = document.createElement("span");
        let br = document.createElement("br");

        span.innerHTML = lescodes[i];
        Lesscript.appendChild(span);
        Lesscript.appendChild(br)

    }

})

// $(function () {
//     var lines = [];
//     $.each($('#script').val().split(/\n/), function (i, line) {
//         if (line) {
//             lines.push(line);
//         } else {
//             lines.push("");
//         }
//     });
//     console.log(lines);
// });