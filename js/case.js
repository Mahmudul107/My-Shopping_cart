function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;


    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

// Phone total price with update
function updateCaseTotalPrice(newCaseNumber) {

    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = newCaseNumber * 59;
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
    
});


document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);

   updateCaseTotalPrice(newCaseNumber);
   calculateSubTotal();

});