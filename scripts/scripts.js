/*let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");
let city = prompt("Введите ваш город:");
let phone = prompt("Введите ваш номер телефона:");
let email = prompt("Введите ваш email:");
let company = prompt("Введите вашу компанию:");

console.log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);*/


/*let age = prompt("Введите ваш возраст:", 20);
let currentYear = 2025;
let birthYear = currentYear - age;
console.log(`${name} родился в ${birthYear} году.`); */


/*let numStr = prompt("Введите строку из 6 цифр:");
console.log(Number(numStr))
let sum = Number(numStr[0] + numStr[1] + numStr[2]);
let sum1 =Number(numStr[4] + numStr[5]) ;
    if (sum == sum1) {
        console.log("да" );
    } else {
        console.log("Нет");
    }*/

// Задание 4
let a = 1;
    if (a > 0) {
        console.log("Верно");
    } else {
        console.log("Неверно");
    }

{
    let a = -0;
        if (a > 0) {
            console.log("Верно");
        } else {
            console.log("Неверно");
        }
}   
{
    let a = -3;
        if (a > 0) {
            console.log("Верно");
        } else {
            console.log("Неверно");
        }
} 

// Задание 5
{
    let a = 10;
    let b = 2;
    let sum = a + b;
    let diff = a - b;
    let mult = a * b;
    let div = a / b;

    console.log(`Сумма: ${sum}`);
    console.log(`Разность: ${diff}`);
    console.log(`Произведение: ${mult}`);
    console.log(`Частное: ${div}`);

        if (sum > 1) {
            console.log(`Квадрат суммы: ${sum * sum}`);
        } 

        // Задание 6
        if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
            console.log("Верно");
        } else {
            console.log("Неверно");
        }
}


// Задание 7
let n = (prompt("Введите число от 0 до 59:"));
let nN = Number(n);
    if (nN >= 0 && nN < 15) {
        console.log("Первая четверть часа");
    } else if (nN >= 15 && nN < 30) {
        console.log("Вторая четверть часа");
    } else if (nN >= 30 && nN < 45) {
        console.log("Третья четверть часа");
    } else if (nN >= 45 && nN <= 59) {
        console.log("Четвертая четверть часа");
    } else {
        console.log("Некорректное число");
    }

// Задание 8
let day = (prompt("Введите день месяца от 1 до 31:"));
let dayNum =Number(day);
if (dayNum >= 1 && dayNum <= 10) {
  console.log("Первая декада");
} else if (dayNum >= 11 && dayNum <= 20) {
  console.log("Вторая декада");
} else if (dayNum >= 21 && dayNum <= 31) {
  console.log("Третья декада");
} else {
  console.log("Некорректный день");
}

// Задание 9
let days = (prompt("Введите количество дней:"));
let daysN = Number(days)
let years = daysN / 365;
let months = daysN / 31;
let weeks = daysN / 7;
let hours = daysN * 24;
let minutes = hours * 60;
let seconds = minutes * 60;

    if (years >= 1) {
        console.log(`Годы: ${years.toFixed(2)}`);
    } else {
        console.log("Меньше года");
    }

    if (months >= 1) {
        console.log(`Месяцы: ${months.toFixed(2)}`);
    } else {
        console.log("Меньше месяца");
    }

    if (weeks >= 1) {
        console.log(`Недели: ${weeks.toFixed(2)}`);
    } else {
        console.log("Меньше недели");
    }

console.log(`Часы: ${hours}`);
console.log(`Минуты: ${minutes}`);
console.log(`Секунды: ${seconds}`);

// Задание 10
let dayOfYear = (prompt("Введите номер дня в году (1-365):"));
let month;

    if (dayOfYear >= 1 && dayOfYear <= 31) month = 1;
    else if (dayOfYear <= 59) month = 2;
    else if (dayOfYear <= 90) month = 3;
    else if (dayOfYear <= 120) month = 4;
    else if (dayOfYear <= 151) month = 5;
    else if (dayOfYear <= 181) month = 6;
    else if (dayOfYear <= 212) month = 7;
    else if (dayOfYear <= 243) month = 8;
    else if (dayOfYear <= 273) month = 9;
    else if (dayOfYear <= 304) month = 10;
    else if (dayOfYear <= 334) month = 11;
    else if (dayOfYear <= 365) month = 12;
    else month = null;

        if (month === null) {
            console.log("Некорректный день года");
        } else {
        let season;
            switch (month) {
                case 12:
                case 1:
                case 2:
                season = "Зима";
                break;
                case 3:
                case 4:
                case 5:
                season = "Весна";
                break;
                case 6:
                case 7:
                case 8:
                season = "Лето";
                break;
                case 9:
                case 10:
                case 11:
                season = "Осень";
                break;
            }
        console.log(`Месяц: ${month}, Пора года: ${season}`);
}