console.log("#6");


let input;
let total = 0;

do {
  input = prompt('Введіть число:');
  if (input !== null) {
    if (!isNaN(Number(input))) {
      total += Number(input);
    } else {
      alert('Було написано не число, спробуйте ще раз');
    }
  }
} while (input !== null);

alert(`Загальна сума чисел дорівнює ${total}`);
