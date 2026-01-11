//ЗАДАЧА 1: Створи обʼєкт користувача
//Створи об’єкт user з такими властивостями:
//name: твоє ім’я
//age: твій вік
//isAdmin: булеве значення (true або false)
//Потім виведи в консоль фразу:
//"Ім’я користувача: <name>, Вік: <age>, Адміністратор: <isAdmin>"

const user = {
  name: "Oleh",
  age: 37,
  isAdmin: true,
};

console.log(
  `Ім'я користувача: ${user.name}, Вік: ${user.age}, Адміністратор: ${user.isAdmin}`
);

//ЗАДАЧА 2: Отримати значення властивості
//Напиши функцію getProp(obj, propName), яка:
//приймає обʼєкт obj і назву властивості propName
//повертає значення цієї властивості або рядок "Властивість не знайдена"

function getProp(obj, propName) {
  if (obj[propName]) {
    return console.log(obj[propName]);
  }
  return console.log("Властивість не знайдена");
}

getProp({ name: "Олег", age: 33 }, "age"); // → 33
getProp({ name: "Олег", age: 33 }, "email"); // → "Властивість не знайдена"

//ЗАДАЧА 3: Порахуй кількість ключів
//Напиши функцію countProps(obj), яка рахує кількість властивостей (ключів) в обʼєкті.

function countProps(obj) {
  const objArr = Object.keys(obj);
  return console.log(objArr.length);
}

countProps({ name: "Diana", age: 7 }); // → 2

//ЗАДАЧА 4: Сума всіх значень
//Є обʼєкт salaries з іменами працівників та їх зарплатами. Напиши функцію sumSalaries(salaries) яка повертає суму всіх зарплат.

const salaries = {
  Sveta: 1500,
  Oleg: 2000,
  Diana: 800,
};

function sumSalaries(salaries) {
  let sum = 0;
  const salariesValues = Object.values(salaries);
  for (const value of salariesValues) {
    sum += value;
  }
  return console.log(sum);
}

sumSalaries(salaries); // → 4300

//ЗАДАЧА 5: Масив обʼєктів — пошук
//Є масив товарів:

const products = [
  { name: "Phone", price: 1200 },
  { name: "Laptop", price: 2700 },
  { name: "Tablet", price: 900 },
];

//Створи функцію findProductByName(products, name), яка повертає обʼєкт з потрібною назвою або null.

function findProductByName(products, name) {
  for (const product of products) {
    if (product.name === name) {
      return console.log(product);
    }
  }
  return console.log(null);
}

findProductByName(products, "Laptop");

//ЗАДАЧА 6: Додай нову властивість
//Напиши функцію addIsExpensive(product):
//якщо ціна більша ніж 1000, додай властивість isExpensive: true
//інакше — isExpensive: false

const produkt = { name: "Phone", price: 800 };
function addIsExpensive(produkt, price) {
  if (produkt.price > 1000) {
    produkt.isExpensive = true;
  } else {
    produkt.isExpensive = false;
  }
  return produkt;
}

console.log(addIsExpensive(produkt));
// { name: "Phone", price: 800, isExpensive: false }

//ЗАДАЧА 7: Фільтрація за значенням
//Є масив студентів:

const students = [
  { name: "Anna", grade: 5 },
  { name: "Boris", grade: 3 },
  { name: "Vira", grade: 4 },
  { name: "Oleh", grade: 5 },
];

function getExcellentStudents(students) {
  const excellentStudents = [];
  for (const student of students) {
    if (student.grade === 5) {
      excellentStudents.push(student.name);
    }
  }
  return excellentStudents;
}

console.log(getExcellentStudents(students));

//Напиши функцію getExcellentStudents(students), яка повертає масив імен студентів, у яких grade === 5.

//      Методи об'єкта

//ЗАДАЧА 1: Метод-привітання
//Створи обʼєкт user, в якому є:
//властивість name (рядок),
//метод sayHello(), який виводить у консоль привітання з ім’ям:
//"Привіт, мене звати <імʼя>"

const myUser = {
  name: "Oleh",
  sayHello() {
    console.log(`Привіт, мене звати ${this.name}`);
  },
};

//Очікуваний виклик:

myUser.sayHello(); // "Привіт, мене звати Олег"

//ЗАДАЧА 2: Лічильник
//Створи обʼєкт counter, який має:
//властивість value (число),
//методи:
//increment() — збільшує значення value на 1
//decrement() — зменшує на 1
//show() — виводить значення value в консоль

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
  show() {
    console.log(this.value);
  },
};

//Очікуваний виклик:
counter.increment();
counter.increment();
counter.decrement();
counter.show(); // 1

//ЗАДАЧА 3: Книга
//Створи обʼєкт book, який має:
//властивості: title, author, pages
//метод describe(), який повертає рядок типу:
//"Книга '1984' написана George Orwell і має 328 сторінок"

const book = {
  title: "Навчитися вчитися",
  author: "Барбара Оакли",
  pages: 350,
  describe() {
    console.log(
      `Книга ${this.title} написана ${this.author} та має ${this.pages} сторінок`
    );
  },
};

//Очікуваний виклик:

book.describe();

//ЗАДАЧА 4: Список завдань
//Створи обʼєкт todoList, який має:
//властивість tasks (масив рядків)
//метод add(task) — додає нове завдання
//метод show() — виводить усі завдання через for...of
//метод clear() — очищає список

const todoList = {
  tasks: [],
  add(task) {
    this.tasks.push(task);
  },
  show() {
    console.log(this.tasks);
  },
  clear() {
    this.tasks.length = 0;
  },
};

//Очікування:

todoList.add("Прибратися");
todoList.add("Повторити JS");
todoList.show();
// → Завдання:
// - Прибратися
// - Повторити JS

todoList.clear();
todoList.show(); // Нічого не виведе

//ЗАДАЧА 5: Користувач зі зміною пароля
//Створи обʼєкт account, який має:
//властивості: username, password
//метод checkPassword(pass) — повертає true, якщо пароль вірний
//метод changePassword(oldPass, newPass) — змінює пароль, тільки якщо oldPass правильний

const account = {
  username: "Oleg",
  password: "5577",
  checkPassword(pass) {
    if (pass === this.password) {
      console.log("true");
    }
  },
  changePassword(oldPass, newPass) {
    if (oldPass === this.password) {
      this.password = newPass;
    }
  },
};

//Очікування:

account.checkPassword("5577"); // true
account.changePassword("5577", "12345");
account.checkPassword("12345"); // true
