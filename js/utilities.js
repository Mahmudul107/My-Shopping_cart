function getTextELementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}

// Calculate Subtotal Price
function calculateSubTotal() {
    // Calculate phone and case total:-

    const currentPhoneTotal = getTextELementValueById('phone-total');
    const currentCaseTotal = getTextELementValueById('case-total');
    const currentSubTotal = parseInt(currentPhoneTotal) + parseInt(currentCaseTotal);

    setTextElementValueById('sub-total', currentSubTotal);

    // Calculate Tax:-
    const taxString = (currentSubTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxString);
    setTextElementValueById('tax', tax);

    // Final amount calculate:-
    const finalAmount = currentSubTotal + tax;
    setTextElementValueById('final-total', finalAmount);
}


