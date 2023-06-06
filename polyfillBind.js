Function.prototype.myBind = function (obj, ...args) {
  const context = this;
  return function () {
    context.apply(obj, [...args]);
  };
};
