"use strict";
const form = document.querySelector('.new-item-form');
const numero = document.getElementById('number');
const nombre = document.getElementById('name');
const age = document.getElementById('age');
const day = document.getElementById('day');
const nationality = document.getElementById('nationality');
form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    function verifyNumber(numero) {
        if (numero % 2 === 0) {
            alert(`${numero} es par`);
        }
        else {
            alert(`${numero} es impar`);
        }
        return;
    }
    function verifyName(nombre) {
        if (!nombre || nombre === null) {
            alert('Error');
        }
        else {
            alert(`Hola, ${nombre}, Bienvenido`);
        }
        return;
    }
    function verifyAge(age) {
        if (age < 18) {
            alert('Eres menor de Edad');
        }
        else {
            alert('Eres mayor de Edad');
        }
        return;
    }
    function verifyDayOfWeek(day) {
        let validOption = true;
        while (validOption) {
            switch (day) {
                case 1:
                    alert('Elegiste Lunes');
                    validOption = false;
                    break;
                case 2:
                    alert('Elegiste Martes');
                    validOption = false;
                    break;
                case 3:
                    alert('Elegiste Miercoles');
                    validOption = false;
                    break;
                case 4:
                    alert('Elegiste Jueves');
                    validOption = false;
                    break;
                case 5:
                    alert('Elegiste Viernes');
                    validOption = false;
                    break;
                case 6:
                    alert('Elegiste Sabado');
                    validOption = false;
                    break;
                case 7:
                    alert('Elegiste Domingo');
                    validOption = false;
                    break;
                default:
                    alert('Elegiste una opcion invalida, intentalo de nuevo');
            }
        }
        return;
    }
    function verifyNationality(nationality) {
        nationality === 'colombia' ? alert('Es Nativo') : alert('Es Extranjero');
        return;
    }
    verifyNumber(numero.valueAsNumber);
    verifyName(nombre.value);
    verifyAge(age.valueAsNumber);
    verifyDayOfWeek(day.valueAsNumber);
    verifyNationality(nationality.value);
});
const form2 = document.querySelector('.second-item-form');
const number1 = document.getElementById('number_1');
const number2 = document.getElementById('number_2');
const number3 = document.getElementById('number_3');
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    function verifyBigger(number1, number2, number3) {
        if (number1 > number2) {
            if (number1 > number3) {
                return number1;
            }
            else {
                return number3;
            }
        }
        else {
            if (number2 > number3) {
                return number2;
            }
            else {
                return number3;
            }
        }
    }
    const bigger = verifyBigger(number1.valueAsNumber, number2.valueAsNumber, number3.valueAsNumber);
    console.log(bigger);
    alert(`el número mayor es ${bigger}`);
});
const form3 = document.querySelector('.third-item-form');
const password = document.getElementById("password");
const check_password = document.getElementById("check_password");
form3.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!password.value) {
        alert("Este campo no puede estar vacio");
    }
    else {
        if (password.value === check_password.value) {
            alert('Contraseña correcta y verificada');
        }
        else {
            alert('Contraseña incorrecta');
        }
    }
});
const form4 = document.querySelector(".forth-item-form");
const month = document.getElementById('month');
form4.addEventListener("submit", (e) => {
    e.preventDefault();
    function verifyMonth(month) {
        switch (month) {
            case 1:
                alert('Elegiste Enero');
                break;
            case 2:
                alert('Elegiste Febrero');
                break;
            case 3:
                alert('Elegiste Marzo');
                break;
            case 4:
                alert('Elegiste Abril');
                break;
            case 5:
                alert('Elegiste Mayo');
                break;
            case 6:
                alert('Elegiste Junio');
                break;
            case 7:
                alert('Elegiste Julio');
                break;
            case 8:
                alert('Elegiste Agosto');
                break;
            case 9:
                alert('Elegiste Septiembre');
                break;
            case 10:
                alert('Elegiste Octubre');
                break;
            case 11:
                alert('Elegiste Noviembre');
                break;
            case 12:
                alert('Elegiste Diciembre');
                break;
            default:
                alert('Elegiste una opcion invalida, intentalo de nuevo');
        }
        return;
    }
    verifyMonth(month.valueAsNumber);
});
