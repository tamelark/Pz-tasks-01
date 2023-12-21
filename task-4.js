
const credits = 23580;
const pricePerDroid = 3000;

let numberOfDroids;

window.onload = function() {
  numberOfDroids = prompt("Скільки дроїдів ви хочете купити?");

  if (numberOfDroids === null) {
    console.log("Скасовано користувачем!");
  } else {
    const totalPrice = numberOfDroids * pricePerDroid;

    if (totalPrice > credits) {
      console.log("Недостатньо коштів на рахунку!");
    } else {
      const remainingCredits = credits - totalPrice;
      console.log(`Ви купили ${numberOfDroids} дроїдів, на рахунку залишилося ${remainingCredits} кредитів.`);
    }
  }
};
