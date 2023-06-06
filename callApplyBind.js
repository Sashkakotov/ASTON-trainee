// TODO binding this

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

// 1 bind
const bindedLogger = logger.bind(obj);
bindedLogger();

// 2 call
logger.call(obj);

// 3 call
logger.apply(obj);
