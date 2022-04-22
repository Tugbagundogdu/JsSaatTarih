let hosgeldin = prompt("Lütfen Adınızı Giriniz");
let myName = document.querySelector("#MyName")

myName.innerHTML = `${hosgeldin.toUpperCase()}!`

function tarihSaat() {

var date = new Date().toLocaleString();
document.querySelector("#date").innerHTML = date;

}

const day = new Date();
const days = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"];
document.querySelector("#gun").innerHTML = days[day.getDay()];

setInterval(tarihSaat, 1000); 
