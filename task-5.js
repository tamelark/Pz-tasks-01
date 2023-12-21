const countries = [
  {
    name: "Китай",
    price: 100,
  },
  {
    name: "Чилі",
    price: 250,
  },
  {
    name: "Австралія",
    price: 170,
  },
  {
    name: "Індія",
    price: 80,
  },
  {
    name: "Ямайка",
    price: 120,
  },
];

let country;

window.onload = function() {
  country = prompt("У яку країну ви хочете доправити товар?");

  if (country === null) {
    alert("Скасовано користувачем!");
  } else {
    country = country.toLowerCase();

    const deliveryPrice = countries.find((item) => item.name === country)?.price;

    if (deliveryPrice) {
      alert(`Доставка в ${country} буде коштувати ${deliveryPrice} кредитів`);
    } else {
      alert("У вашій країні доставка недоступна");
    }
  }
};
