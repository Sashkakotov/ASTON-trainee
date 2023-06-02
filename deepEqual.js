//TODO create function of deep equals two objects

const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;

  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) return false;

  for (let obj1Key in obj1) {
    if (!deepEqual(obj1[obj1Key], obj2[obj1Key])) return false;
  }

  return true;
};
