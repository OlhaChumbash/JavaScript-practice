
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const genderSelect = document.getElementById('gender');
const confirmationCheckbox = document.getElementById('confirmation');


form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    if (!validateName(nameInput.value)) {
        showValidationError(nameInput, 'Ім\'я повинно містити від 3 до 15 латинських літер.');
    }

    if (!validateAge(ageInput.value)) {
        showValidationError(ageInput, 'Вік повинен бути числом від 1 до 2 цифр.');
    }

    if (!validateGender(genderSelect.value)) {
        showValidationError(genderSelect, 'Будь ласка, виберіть стать.');
    }

    if (!confirmationCheckbox.checked) {
        showValidationError(confirmationCheckbox, 'Для відправки форми вам необхідно підтвердити умови.');
    }
});

function validateName(name) {
    return /^[A-Za-z]{3,15}$/.test(name);
}

function validateAge(age) {
    return /^[0-9]{1,2}$/.test(age);
}

function validateGender(gender) {
    return gender !== '';
}

function showValidationError(input, message) {
    alert(message);
    input.focus();
}

