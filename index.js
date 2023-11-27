let principalAmount = document.getElementById("principalAmount");
let interestRate = document.getElementById("interestRate");
let timePeriod = document.getElementById("timePeriod");
let resContainer = document.getElementById("result");
const btn = document.getElementById("calculateInt");

function caclculateInterest(){
    let interest = principalAmount.value * interestRate.value * timePeriod.value;
    let finalRes = interest / 100;
    console.log(finalRes);
    resContainer.innerHTML = `
    <h4>Interest is: ${finalRes}</h4>
    `;
}

btn.addEventListener("click", caclculateInterest);


// const principalAmount = parseFloat(document.getElementById("principalAmount").value);
// const interestRate = parseFloat(document.getElementById("interestRate").value);
// const timePeriod = parseFloat(document.getElementById("timePeriod").value);
