import Suite from "../src/suite";
import Test from "../src/test";

module.exports = function (context, root) {
  // context是describe的别名， specify是it的别名
  context.describe = context.context = function (title, fn) {};
  context.specify = context.it = function (title, fn) {};
  context.before = function (fn) {};
  context.after = function (fn) {};
  context.beforeEach = function (fn) {};
  context.afterEach = function (fn) {};
};
