const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const button = document.getElementById("operations");

button.addEventListener("click", function () {
    let broj1 = Number(input1.value);
    let broj2 = Number(input2.value);

    console.log("Sabiranje:", broj1 + broj2);
    console.log("Oduzimanje:", broj1 - broj2);
    console.log("Množenje:", broj1 * broj2);
    console.log("Dijeljenje:", broj1 / broj2);
});

const naslov = document.getElementById("naslov");
const tekst = document.getElementById("tekstZamjena");
const dugme = document.getElementById("zamjena");

dugme.addEventListener("click", function () {
    naslov.textContent = tekst.value;
});
