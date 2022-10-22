const eleName = document.querySelector("#name");
const eleKm = document.querySelector("#km");
const eleAge = document.querySelector("#age");
const eleBox = document.querySelector("#box_info");
const eleBoxTicket = document.querySelector(".box_ticket");
const eleConferma = document.querySelector(".btn-succes");
const eleDelete = document.querySelector(".btn-danger");

eleConferma.addEventListener('click', function () {
    const Km = parseFloat(eleKm.value);
    const basePrice = parseFloat(Km * 0.21);
    const age = eleAge.value;
    let discount = 0;

    if (age === 'min') {
        discount = 20;
    } else if (age === 'over') {
        discount = 40;
    }

    if (eleName.value === '' || eleKm.value === '' || eleAge.value === 'none') {
        eleBoxTicket.innerHTML = ('Complila il form');
    } else {
        let totalPrice = basePrice - basePrice * discount / 100;
        totalPrice = parseFloat(totalPrice.toFixed(2));
        eleBoxTicket.innerHTML = ('Questo è il prezzo del tuo biglietto: ${totalPrice}€. Fai buon viaggio!');
    }
});

eleDelete.addEventListener('click', function (){
    document.location.reload();
})