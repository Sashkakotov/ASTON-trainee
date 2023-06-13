// TODO write function which will take through array and return index of each element every 3s

const arr = [10, 12, 15, 21];

// setTimeout

const indexEveryThreeSecondSetTimeout = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(i);
    }, 3000 * (i + 1));
  }
};

indexEveryThreeSecondSetTimeout(arr);

// setInterval

const indexEveryThreeSecondSetInterval = (arr) => {
  let index = 0;
  let interval = setInterval(() => {
    if (index >= arr.length) {
      clearInterval(interval);
      return;
    }
    console.log(index);
    index++;
  }, 3000);
};
indexEveryThreeSecondSetInterval(arr);
