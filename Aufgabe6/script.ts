window.addEventListener("load", function() {

var txt1:string="Die Emission von ";
var txt2:string=" ist ";
var txt3:string="kg CO2. ";
var txt4:string="Relativ zur Gesamtemission der Welt verursacht ";
var txt5:string=" damit ";
var txt6:string="%. ";
var txt7:string="Für ";
var txt8:string=" hat sich 2018 im Vergleich zu 2008 die Emission um ";
var txt9:string="% verändert. ";
var txt10:string="2018 im Vergleich zu 2008 sind das ";
var txt11:string="kg CO2. ";

var Africa:string="Afrika";
var SouthAmerica:string="Südamerika";
var Europe:string="Europa";
var NorthAmerica:string="Nordamerika";
var Asia:string="Asien";
var Australia:string="Australien";

var Africa08:number=1028;
var Africa18:number=1235.5;
var SouthAmerica08:number=1132.6;
var SouthAmerica18:number=1261.5;
var Europe08:number=4965.7;
var Europe18:number=4209.3;
var NorthAmerica08:number=6600.4;
var NorthAmerica18:number=6035.6;
var Asia08:number=12954.7;
var Asia18:number=16274.1;
var Australia08:number=1993;
var Australia18:number=2100.5;

var WrldEmiss:number= Africa18 + SouthAmerica18 + Europe18 + NorthAmerica18 + Asia18 + Australia18;

var AfWrld:number=Africa18 * 100 / WrldEmiss;
var SAWrld:number=SouthAmerica18 * 100 / WrldEmiss;
var EuWrld:number=Europe18 * 100 / WrldEmiss;
var NAWrld:number=NorthAmerica18 * 100 / WrldEmiss;
var AsWrld:number=Asia18 * 100 / WrldEmiss;
var AusWrld:number=Australia18 * 100 / WrldEmiss;

var AfAf:number=(Africa18 / Africa08 - 1) * 100;
var SASA:number=(SouthAmerica18 / SouthAmerica08 - 1) * 100;
var EuEu:number=(Europe18 / Europe08 - 1) * 100;
var NANA:number=(NorthAmerica18 / NorthAmerica08 - 1) * 100;
var AsAs:number=(Asia18 / Asia08 - 1) * 100;
var AusAus:number=(Australia18 / Australia08 - 1) * 100;

var AfAfCo2:number=Africa18 - Africa08;
var SASACo2:number=SouthAmerica18 - SouthAmerica08;
var EuEuCo2:number=Europe18 - Europe08;
var NANACo2:number=NorthAmerica18 - NorthAmerica08;
var AsAsCo2:number=Asia18 - Asia08;
var AusAusCo2:number=Australia18 - Australia08;

console.log(txt1 + Africa + txt2 + Africa18 + txt3 + txt4 + Africa + txt5 + AfWrld.toFixed(2) + txt6 + txt7 + Africa + txt8 +AfAf.toFixed(2) + txt9 +  txt10 + AfAfCo2.toFixed(2) + txt11);
console.log(txt1 + SouthAmerica + txt2 + SouthAmerica18 + txt3 + txt4 + SouthAmerica + txt5 + SAWrld.toFixed(2) + txt6 + txt7 + SouthAmerica + txt8 + SASA.toFixed(2) + txt9 + txt10 + SASACo2.toFixed(2) + txt11);
console.log(txt1 + Europe + txt2 + Europe18 + txt3 + txt4 + Europe + txt5 + EuWrld.toFixed(2) + txt6 + txt7 + Europe + txt8 + txt9 + EuEu.toFixed(2) + txt10 + EuEuCo2.toFixed(2) + txt11);
console.log(txt1 + NorthAmerica + txt2 + NorthAmerica18 + txt3 + txt4 + NorthAmerica + txt5 + NAWrld.toFixed(2) + txt6 + txt7 + NorthAmerica + txt8 + NANA.toFixed(2) + txt9 + txt10 + NANACo2.toFixed(2) + txt11);
console.log(txt1 + Asia + txt2 + Asia18 + txt3 + txt4 + Asia + txt5 + AsWrld.toFixed(2) + txt6 + txt7 + Asia + txt8 + AsAs.toFixed(2) + txt9 + txt10 + AsAsCo2.toFixed(2) + txt11);
console.log(txt1 + Australia + txt2 + Australia18 + txt3 + txt4 + Australia + txt5 + AusWrld.toFixed(2) + txt6 + txt7 + Australia + txt8 + AusAus.toFixed(2) + txt9 + txt10 + AusAusCo2.toFixed(2) + txt11);

function Continent(Name, EmissionAbsoluteContinent, EmissionRelativeToWorld, GrowthRateRelative, GrowthRateAbsolute) {
    document.querySelector(".ContinentDefinitionTitle").innerHTML = Name;
    document.querySelector(".ContinentDefinitionBody").innerHTML = Name;
    document.querySelector(".EmissionAbsolute").innerHTML = EmissionAbsoluteContinent.toFixed(2);
    document.querySelector(".EmissionRelative").innerHTML = EmissionRelativeToWorld.toFixed(2) + "%";
    document.querySelector(".GrowthRelative").innerHTML = GrowthRateRelative.toFixed(2) + "%";
    document.querySelector(".GrowthAbsolute").innerHTML = GrowthRateAbsolute.toFixed(2);
    var Diagramm = document.querySelector(".chart");
    Diagramm.style.height = EmissionRelativeToWorld + "px";
}

document.querySelector(".europe").addEventListener("click", function () {Continent (Europe, Europe18, EuWrld, EuEu, EuEuCo2);});
document.querySelector(".northamerica").addEventListener("click", function () {Continent (NorthAmerica, NorthAmerica18, NAWrld, NANA, NANACo2);});
document.querySelector(".southamerica").addEventListener("click", function () {Continent (SouthAmerica, SouthAmerica18, SAWrld, SASA, SASACo2);});
document.querySelector(".africa").addEventListener("click", function () {Continent (Africa, Africa18, AfWrld, AfAf, AfAfCo2);});
document.querySelector(".asia").addEventListener("click", function () {Continent (Asia, Asia18, AsWrld, AsAs, AsAsCo2);});
document.querySelector(".australia").addEventListener("click", function () {Continent (Australia, Australia18, AusWrld, AusAus, AusAusCo2);});7



});