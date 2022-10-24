const eleName = document.querySelector("#name");
const eleKm = document.querySelector("#km");
const eleAge = document.querySelector("#age");
const eleBox = document.querySelector("#box_info");
const eleBoxTicket = document.querySelector(".box_ticket");
const eleConferma = document.querySelector(".btn-success");
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
        eleBoxTicket.innerHTML = (`Questo è il prezzo del tuo biglietto: ${totalPrice} €.`);
       
        const fullName = eleName.value;
        const userName = document.querySelector('.ticket_name');
        userName.innerHTML = (`${fullName}` );
       
        const eleWagon = document.querySelector('.wagon');
        numberWagon = Math.floor(Math.random() * 100);
        eleWagon.innerHTML = (`Vagone: ${numberWagon}`);

        const eleCode = document.querySelector('.code');
        numberCode = Math.floor(Math.random() * 1000000);
        eleCode.innerHTML = (`Codice CP: n°${numberCode}`);

        const eleSweet = document.querySelector('.sweet');
        eleSweet.innerHTML = ('Buon viaggio');
    }
});

eleDelete.addEventListener('click', function (){
    document.location.reload();
})