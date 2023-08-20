let login = 'admin'
let password = 'qwerty'

let register = []

let type_form = document.querySelector('.form1').id

let button = document.querySelector('.btn')
button.addEventListener('click', function () {
    let data = []
    let inputs = document.querySelectorAll('input')
    for(let i = 0; i < inputs.length; i++) {
        data.push(inputs[i].value)
    }

    if(type_form === "registration") {
      register.push(data)
      alert(register)
    } else {
      console.log(data);
      if(data[0] === login && data[1] === password) {
        alert("Вы авторизованы")
      } else {
        alert("Неправильный логин или пароль!")
      }
    }
})