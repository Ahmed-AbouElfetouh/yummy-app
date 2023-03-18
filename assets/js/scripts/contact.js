const nameInput = document.getElementById('name-input');
const phoneInput = document.getElementById('phone-input');
const passwordInput = document.getElementById('password-input');
const emailInput = document.getElementById('email-input');
const ageInput = document.getElementById('age-input');
const rePasswordInput = document.getElementById('rePassword-input');

const nameMsg = document.getElementById('name-msg');
const phoneMsg = document.getElementById('phone-msg');
const paswordMsg = document.getElementById('password-msg');
const emailMsg = document.getElementById('email-msg');
const ageMsg = document.getElementById('age-msg');
const rePasswordMsg = document.getElementById('rePassword-msg');

const submitBtn = document.getElementById('submit');

const openBtn = document.getElementById('open-btn');
const infoList = document.getElementById('info-list')

function checkNameInput() {
  let regName = /^[a-zA-Z,'.\-\s]*$/;
  if (regName.test(nameInput.value)) {
    if (nameMsg.style.display == 'block') {
      nameMsg.style.display = 'none';
    }
    nameInput.classList.add('right');
  } else {
    nameMsg.style.display = 'block';
    if (nameInput.classList.contains('right')) {
      nameInput.classList.remove('right');
    }
  }
}

function checkPhoneInput() {
  let regPhone = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;
  if (regPhone.test(phoneInput.value)) {
    if (phoneMsg.style.display == 'block') {
      phoneMsg.style.display = 'none';
    }
    phoneInput.classList.add('right');
  } else {
    phoneMsg.style.display = 'block';
    if (phoneInput.classList.contains('right')) {
      phoneInput.classList.remove('right');
    }
  }
}

function checkPaswordInput() {
  let regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if (regPassword.test(passwordInput.value)) {
    if (paswordMsg.style.display == 'block') {
      paswordMsg.style.display = 'none';
    }
    passwordInput.classList.add('right');
  } else {
    paswordMsg.style.display = 'block';
    if (passwordInput.classList.contains('right')) {
      passwordInput.classList.remove('right');
    }
  }
}

function checkEmailInput() {
  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEmail.test(emailInput.value)) {
    if (emailMsg.style.display == 'block') {
      emailMsg.style.display = 'none';
    }
    emailInput.classList.add('right');
  } else {
    emailMsg.style.display = 'block';
    if (emailInput.classList.contains('right')) {
      emailInput.classList.remove('right');
    }
  }
}

function checkAgeInput() {
  if (ageInput.value > 16) {
    if (ageMsg.style.display == 'block') {
      ageMsg.style.display = 'none';
    }
    ageInput.classList.add('right');
  } else {
    ageMsg.style.display = 'block';
    if (ageInput.classList.contains('right')) {
      ageInput.classList.remove('right');
    }
  }
}

function checkRepasswordInput() {
  if (passwordInput.value === rePasswordInput.value) {
    if (rePasswordMsg.style.display == 'block') {
      rePasswordMsg.style.display = 'none';
    }
    rePasswordInput.classList.add('right');
  } else {
    rePasswordMsg.style.display = 'block';
    if (rePasswordInput.classList.contains('right')) {
      rePasswordInput.classList.remove('right');
    }
  }
}

function handelSubmit() {
  if (
    nameInput.classList.contains('right') &&
    phoneInput.classList.contains('right') &&
    emailInput.classList.contains('right') &&
    ageInput.classList.contains('right') &&
    passwordInput.classList.contains('right') &&
    rePasswordInput.classList.contains('right')
  ) {
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.add('set')
  } else {
    submitBtn.setAttribute('disabled', "")
    submitBtn.classList.remove('set')
  }
}

rePasswordInput.addEventListener('input', function () {
  checkRepasswordInput();
  handelSubmit()
});
ageInput.addEventListener('input', function () {
  checkAgeInput();
  handelSubmit
});
emailInput.addEventListener('input', function () {
  checkEmailInput();
  handelSubmit
});
passwordInput.addEventListener('input', function () {
  checkPaswordInput();
  handelSubmit
});
phoneInput.addEventListener('input', function () {
  checkPhoneInput();
  handelSubmit
});
nameInput.addEventListener('input', function () {
  checkNameInput();
  handelSubmit
});


openBtn.addEventListener('click', function () {
  this.classList.toggle('right-250');
  infoList.classList.toggle('right-0')
})