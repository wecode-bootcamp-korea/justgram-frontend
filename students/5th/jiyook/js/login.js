const inputId = document.querySelector('#id');
const inputPw = document.querySelector('#pw');
const button = document.querySelector('.loginBtn');

function loginBtn() {
  //console.log(inputId.value);
  //console.log(typing);

  let idValue = inputId.value;
  let passwordValue = inputPw.value;

  if (idValue.length > 0 && passwordValue.length > 0) {
    console.log('테스트!!!');
    button.style.opacity = 1;
    button.disabled = false;
  } else {
    button.style.opacity = 0.5;
    button.disabled = true;
    //button.style.cursor = 'poninter';
  }
}

inputId.addEventListener('keyup', loginBtn);
inputPw.addEventListener('keyup', loginBtn);
