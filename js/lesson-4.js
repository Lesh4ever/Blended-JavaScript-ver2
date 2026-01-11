//1. map — Подвоїти числа
//Напиши функцію doubleNumbers(numbers), яка повертає новий масив, де всі числа подвоєні.

const numbers = [1, 2, 3];

function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}

console.log(doubleNumbers(numbers));

//2. flatMap — Витягнути всі імена друзів
//Є масив об’єктів користувачів з полем friends (масив). Поверни масив усіх друзів без вкладеності.

const users = [
  { name: "Oleg", friends: ["Diana", "Yurii"], isActive: true, age: 37 },
  { name: "Sveta", friends: ["Oksana", "Nazar"], isActive: true, age: 33 },
  { name: "Tanya", friends: ["Sveta", "Oleg"], isActive: false, age: 38 },
  { name: "Olexiy", friends: ["Denis", "Vano"], isActive: false, age: 16 },
];

const friendsNames = users.flatMap((user) => user.friends);

console.log(friendsNames);

// Вихід: ["Diana", "Yurii", "Oksana", "Nazar"]

//3. filter — Залишити тільки активних користувачів
//Напиши функцію getActiveUsers(users), яка повертає новий масив, де isActive: true.

function getActiveUsers(users) {
  return users.filter((user) => user.isActive);
}

console.log(getActiveUsers(users));

//4. find — Знайти товар за імʼям
//Є масив товарів, знайди об’єкт товару з назвою "Phone"

const stufs = [
  { name: "Phone", cost: 1000, inStock: true },
  { name: "TV", cost: 800, inStock: false },
  { name: "Notebook", cost: 1500, inStock: true },
];

const phone = stufs.find((stuf) => stuf.name === "Phone");

console.log(phone);

//5. every — Чи всі користувачі повнолітні?
//Перевір, чи всі користувачі мають age >= 18.

console.log(users.every((user) => user.age >= 18));

//6. some — Чи є хоч один неактивний користувач?

console.log(users.some((user) => !user.isActive));

//7. reduce — Підрахувати загальну суму покупок
//Масив чисел — суми покупок. Порахуйте загальну суму.

const purchases = [120, 350, 99, 50, 400, 230];

console.log(
  purchases.reduce((acc, purchas) => {
    return acc + purchas;
  }, 0)
);

//8. Комбінована задача
//Є масив користувачів. Знайди всіх активних, витягни їхні email-адреси, і виведи список адрес.

const people = [
  { name: "Anna", isActive: true, email: "anna@example.com" },
  { name: "Boris", isActive: false, email: "boris@example.com" },
  { name: "Clara", isActive: true, email: "clara@example.com" },
  { name: "Dmytro", isActive: false, email: "dmytro@example.com" },
];

function activePeople(people) {
  return people
    .filter((person) => person.isActive)
    .map((person) => person.email);
}

console.log(activePeople(people));

//9. Напиши свою колбек-функцію
//Створи функцію processArray(arr, callback), яка:
//приймає масив і колбек
//повертає результат виклику колбека на цьому масиві
//Спробуй викликати її з map, filter, reduce.

const clients = [
  {
    id: 1,
    name: "Anna Petrova",
    email: "anna.petrova@example.com",
    age: 28,
    isActive: true,
    orders: [150, 200, 350],
  },
  {
    id: 2,
    name: "Dmytro Ivanov",
    email: "dmytro.ivanov@example.com",
    age: 35,
    isActive: false,
    orders: [],
  },
  {
    id: 3,
    name: "Olena Koval",
    email: "olena.koval@example.com",
    age: 22,
    isActive: true,
    orders: [50, 25],
  },
  {
    id: 4,
    name: "Maksym Bondarenko",
    email: "maksym.bondarenko@example.com",
    age: 40,
    isActive: false,
    orders: [1000, 500],
  },
  {
    id: 5,
    name: "Sofiia Melnyk",
    email: "sofiia.melnyk@example.com",
    age: 30,
    isActive: true,
    orders: [120, 80, 45],
  },
];

function processArray(arr, callback) {
  return callback(arr);
}

const operations = (clients) => {
  return clients
    .filter((client) => client.age > 22)
    .flatMap((client) => client.orders)
    .reduce((acc, client) => {
      return acc + client;
    }, 0);
};

console.log(processArray(clients, operations));
