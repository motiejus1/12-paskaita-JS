"use strict";


//konstruktoriaus f-ja is didziosios raides
function Zmogus(vardas, pavarde, metai, asmensKodas ) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.metai = metai;
    this.asmensKodas = asmensKodas;
}

let zmogus1 = new Zmogus('Vardenis','Pavardenis', '1800', '12154484568486')

console.log(zmogus1);