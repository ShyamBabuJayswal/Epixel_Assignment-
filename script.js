document.getElementById('hamburger').addEventListener('click', function() {
    const navMiddle = document.querySelector('.nav-middle');
    navMiddle.style.display = navMiddle.style.display === 'flex' ? 'none' : 'flex';
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = form.querySelector('input[placeholder="First Name"]').value.trim();
        const lastName = form.querySelector('input[placeholder="Last Name"]').value.trim();
        const email = form.querySelector('input[placeholder="Email Address"]').value.trim();
        const phoneNumber = form.querySelector('input[placeholder="Mobile Number"]').value.trim();
        const password = form.querySelector('input[placeholder="Create Password"]').value.trim();

        let valid = true;

        const validationMessages = document.querySelectorAll('.validation-message');
        validationMessages.forEach(message => message.remove());

        if (!firstName) {
            valid = false;
            showErrorMessage("First Name is required", form.querySelector('input[placeholder="First Name"]'));
        }

        if (!lastName) {
            valid = false;
            showErrorMessage("Last Name is required", form.querySelector('input[placeholder="Last Name"]'));
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email)) {
            valid = false;
            showErrorMessage("Please enter a valid email address", form.querySelector('input[placeholder="Email Address"]'));
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phoneNumber || !phonePattern.test(phoneNumber)) {
            valid = false;
            showErrorMessage("Please enter a valid 10-digit phone number", form.querySelector('input[placeholder="Mobile Number"]'));
        }

        if (password.length < 8) {
            valid = false;
            showErrorMessage("Password must be at least 8 characters long", form.querySelector('input[placeholder="Create Password"]'));
        }

        if (valid) {
            const formData = {
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                email: email,
                password: password,
            };
            console.log(formData);
        }
    });

    function showErrorMessage(message, input) {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('validation-message');
        errorMessage.style.color = 'red';
        errorMessage.textContent = message;
        input.parentNode.insertBefore(errorMessage, input.nextSibling);
    }
});

