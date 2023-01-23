let login = prompt("İsminizi Giriniz: ");
let h1Yazdir = document.querySelector(".h1-yaz");
h1Yazdir.innerHTML = `Merhaba, ${login.toUpperCase()} Sisteme Hoşgeldiniz.`

// fonksiyon in h2 element
function Clock() {
    const date = new Date();
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const d = new Date("2021-03-25");
    let h2Yazdir = document.querySelector(".h2-yaz");
    h2Yazdir.innerHTML = `${days[date.getDay()]}  ${d.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }

// Run with setInterval 
setInterval(Clock,1000)
