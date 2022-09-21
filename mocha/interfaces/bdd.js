import Suite from "../src/suite";
import Test from "../src/test";
import adaptPromise from "../src/utils";

module.exports = function (context, root) {
  const suites = [root];
  // context是describe的别名， specify是it的别名
  context.describe = context.context = function (title, callback) {
    // 获取当前栈中的当前节点
    const cur = suites[0];
    // 实例化一个Suite对象，存储当前的describe函数信息
    const suite = new Suite(cur, title);
    suites.unshift(suite);
    callback.call(suite);
    suites.shift();
  };
  context.specify = context.it = function (title, fn) {
    // 获取当前Suite节点
    const cur = suites[0];
    const test = new Test(title, adaptPromise(fn));
    cur.tests.push(test);
  };
  context.before = function (fn) {
    const cur = suites[0];
    cur._beforeAll.push(adaptPromise(fn));
  };
  context.after = function (fn) {
    const cur = suites[0];
    cur._afterAll.push(adaptPromise(fn));
  };
  context.beforeEach = function (fn) {
    const cur = suites[0];
    cur._beforeEach.push(adaptPromise(fn));
  };
  context.afterEach = function (fn) {
    const cur = suites[0];
    cur._afterEach.push(adaptPromise(fn));
  };
};
