"use strict";


document.getElementById("patvirtinti").addEventListener("click", function() {

    let skaicius = document.getElementById("skaicius").value

    console.log(document.getElementById("skaicius").value);
})

//konstruktoriaus f-ja is didziosios raides
function Zmogus(vardas, pavarde, metai, asmensKodas ) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.metai = metai;
    this.asmensKodas = asmensKodas;
    //prisistatyk 

    this.prisistatyk = function() {
        return this.asmensKodas;
    }

    this.pakeisk = function( pakeistasVardas ) {
        this.vardas = pakeistasVardas;
    }

}

let zmogus1 = new Zmogus('Vardenis','Pavardenis', '1800', '12154484568486');

// zmogus1 = {
//    vardas: "vardenis",
//    pavarde: "pavardenis"
//    ...
//    pilnasVardas: function() {

//    }
// }

//zmogus1 apibudinimas

zmogus1.apibudinimas = "Aukštas";

//isvestu varda ir pavarde

zmogus1.pilnasVardas = function () {
    return this.vardas + " " + this.pavarde
}


// zmogus1['apibudinimas']

console.log(zmogus1);

console.log(zmogus1.pilnasVardas());

const zmogus2 = new Zmogus('Jonas', 'Jonaitis', '1820', '5485475464');



zmogus1.pakeisk("Petras");
zmogus2.pakeisk("Jonas Petras");


console.log(zmogus1);
console.log(zmogus2);