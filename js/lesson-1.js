//Задача 1: Чи повнолітній
//Створи функцію isAdult(age), яка приймає вік і повертає "Доступ дозволено", якщо вік 18 або більше, і "Доступ заборонено" — якщо менше.

function isAdult(age) {
  if (age >= 18) {
    return "Доступ дозволено";
  } else {
    return "Доступ заборонено";
  }
}

console.log(isAdult(8));

//Задача 2: Рядок містить слово
//Функція containsWord(text, word) повертає true, якщо text містить слово word. Використовуй метод includes.

function containsWord(text, word) {
  if (text.includes(word)) {
    return console.log(true);
  }
}

containsWord("Hello Oleh", "Hello");

//3. Обрізати зайве
//Функція cutLongText(text):
//видаляє зайві пробіли з початку та кінця
//обрізає перші 10 символів
//повертає результат
//Використовуй trim() та slice()

function cutLongText(text) {
  return text.trim().slice(0, 10);
}

console.log(cutLongText("   Oleh Ovcharuk"));

//4. Визначити, чи починається рядок з певної літери
//Функція startsWithLetter(text, letter):
//повертає true, якщо рядок text починається з літери letter
//порівнюй у нижньому регістрі (toLowerCase)

function startsWithLetter(text, letter) {
  const textToLowerCase = text.toLowerCase();
  if (textToLowerCase.slice(0, 1) === letter) {
    return true;
  } else {
    return false;
  }
}

console.log(startsWithLetter("Oleh", "o"));

//5. Порахувати суму чисел від 1 до number
//Функція sumTo(number):
//рахує суму від 1 до number включно
//використовуй while або for

function sumTo(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(5));

//6. Знайти перше число кратне 3 в діапазоні
//Функція findFirstDivisible(start, end):
//повертає перше число в діапазоні [start, end], яке ділиться на 3
//якщо не знайдено — повертає "Не знайдено"
//Використовуй for та break

function findFirstDivisible(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0) {
      return i;
    }
  }
  return "Не знайдено";
}

console.log(findFirstDivisible(4, 8));

//7. Рядок закінчується на певне слово
//Функція endsWithWord(text, word):
//перевіряє, чи закінчується text на word
//не чутлива до регістру (toLowerCase)

function endsWithWord(text, word) {
  const toLowerText = text.toLowerCase();
  const toLowerWord = word.toLowerCase();
  if (toLowerText.endsWith(toLowerWord)) {
    return true;
  } else {
    return false;
  }
}

console.log(endsWithWord("Свєта + Олег", "Олег"));

//            Масиви

//1. Обʼєднати рядок у масив слів
//Функція splitToWords(text):
//приймає рядок
//повертає масив слів (розділених пробілом)

function splitToWords(text) {
  return text.split(" ");
}

console.log(splitToWords("Привіт світе!"));

//2. Обʼєднати масив слів у рядок
//Функція joinWords(words):
//приймає масив слів
//повертає єдиний рядок, де слова з’єднані пробілом

function joinWords(words) {
  return words.join(" ");
}

console.log(joinWords(["Олег", "вчиться", "JS"]));

//3. Знайти індекс елемента
//Функція findCityIndex(cities, cityName):
//повертає індекс елемента cityName у масиві cities
//якщо не знайдено — повертає "Місто не знайдено"

function findCityIndex(cities, cityName) {
  const indexCity = cities.indexOf(cityName);
  if (cities[indexCity] === -1) {
    return "Місто не знайдено";
  } else {
    return indexCity;
  }
}

console.log(findCityIndex(["Vinnicya", "Kyiv", "Dashiv"], "Vinnicya"));

//4. Додати елемент до масиву
//Функція addFriend(friends, newFriend):
//додає newFriend в кінець масиву friends
//повертає оновлений масив

function addFriend(friends, newFriend) {
  friends.push(newFriend);
  return friends;
}

console.log(addFriend(["Oleg", "Sveta", "Denis"], "Petro"));

//5. Чи є значення в масиві
//Функція isUserBanned(bannedList, username):
//повертає true, якщо користувач є в списку заблокованих
//інакше — false

function isUserBanned(bannedList, username) {
  return bannedList.includes(username);
}

console.log(isUserBanned(["Oleg", "Sveta", "Diana", "Yuriy"], "Oleg"));

//6. Обʼєднати два масиви без зміни оригінальних
//Функція mergeTags(tags1, tags2):
//повертає новий масив, який містить всі теги з tags1 і tags2
//не змінює оригінальні масиви

function mergeTags(tags1, tags2) {
  const concatArr = tags1.concat(tags2);
  return concatArr;
}

console.log(mergeTags(["Oleg", "Diana"], ["Sveta", "Yurchik"]));

//7. Взяти лише перші N елементів
//Функція getTopItems(items, count):
//повертає новий масив, який містить лише перші count елементів з масиву items

function getTopItems(items, count) {
  return items.slice(0, count);
}
console.log(getTopItems(["яблуко", "груша", "слива"], 2));

//8. Розвернути ім’я користувача у форматі "Ім’я Прізвище"
//Функція reverseFullName(fullName):
//приймає рядок "Овчарук Олег"
//повертає "Олег Овчарук"
//Використай split(), reverse() не можна, бо ти його ще не вчив — зроби руками.

function reverseFullName(fullName) {
  const arrFullName = fullName.split(" ");
  const arrName = arrFullName[1];
  const arrLastName = arrFullName[0];
  return `${arrName} ${arrLastName}`;
}

console.log(reverseFullName("Овчарук Олег"));

//9. Вивести всі елементи з індексами
//Функція logItemsWithIndex(items):
//перебирає масив items за допомогою for або for...of
//виводить у консоль кожен елемент разом з його індексом

function logItemsWithIndex(items) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i}: ${items[i]}`);
  }
}

logItemsWithIndex(["яблуко", "груша", "слива", "банан"]);
