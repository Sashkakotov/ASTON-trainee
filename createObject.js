// TODO Create object counter in all possible ways

// 1
const counter = {
  count: 1,
};

// 2
const counter1 = Object.create(
  {},
  {
    count: {
      enumerable: true,
      value: 1,
    },
  }
);

// 3
const counter2 = Object.assign(
  {},
  {
    count: 1,
  }
);

// 4
const counter3 = new Object({
  count: 1,
});

// 5
function CreateCounter(count) {
  this.count = count;
}
const counter4 = new CreateCounter(1);

// 6
class CreateCounterClass {
  constructor(count) {
    this.count = count;
  }
}
const counter5 = new CreateCounterClass(1);


