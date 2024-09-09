function calculateTotal(){
    const grocery1 = parseFloat(document.getElementById("grocery1").value);
    const grocery2 = parseFloat(document.getElementById("grocery2").value);
    const grocery3 = parseFloat(document.getElementById("grocery3").value);

    console.log(grocery1);
    console.log(grocery2);
    console.log(grocery3);
    const totalPrice = grocery1 + grocery2 + grocery3;
    console.log(typeof(totalPrice), totalPrice);
    document.getElementById("totalPrice").innerText =  `The total amounr is: ${totalPrice}`;
}