// TODO Copy object counter in all possible ways

const counter = {
  count: 1,
  nestedObject: {
    name: "Sasha",
  },
};

// No deep copies

// 1
const copyCounter = { ...counter };

// 2
const copyCounter1 = Object.assign({}, counter);

// 3
const copyObject = () => {
  const copyObj = {};
  let key;
  for (key in counter) {
    copyObj[key] = counter[key];
  }
  return copyObj;
};
const copyCounter2 = copyObject();

// Deep copies

// 4
const copyCounter3 = structuredClone(counter);

// 5 lodash library
const copyCounter4 = _.cloneDeep(counter);

// 6
const deepObjectCopy = (obj) => {
  if (typeof obj !== "object") return obj;
  const copyObject = {};
  Object.keys(obj).forEach(
    (key) => (copyObject[key] = deepObjectCopy(obj[key]))
  );
  return copyObject;
};

const copyCounter5 = deepObjectCopy(counter);
