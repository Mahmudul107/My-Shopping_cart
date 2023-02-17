function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;


    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

// Phone total price with update
function UpdatePhoneTotalPrice(newPhoneNumber) {

    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = newPhoneNumber * 1219;
}

// Help with utilities function js:-

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    //    const phoneTotalElement = document.getElementById('phone-total');
    //    phoneTotalElement.innerText = newPhoneNumber * 1219;
    UpdatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

})



document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);

    UpdatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

})


