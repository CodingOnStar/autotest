/*
 * @Author: CodingOnStar
 * @Date: 2022-09-19 20:50:06
 * @Last Modified time: 2022-09-19 20:50:06
 * File for describe(suite)
 */

/**
 * @param parent 父节点
 * @param title Suite名称，即describe传入的第一个参数
 * 整体实现为树结构，
 */
class Suite {
  constructor(parent, title) {
    this.title = title; // Suite名称，即describe传入的第一个参数
    this.parent = parent; //父suite
    this.suites = []; // 子级suite
    this.tests = []; //包含的iit 测试用例方法
    this._beforeAll = [];
    this._afterAll = [];
    this._beforeEach = [];
    this._afterEach = [];
    // 当前Suite示例push到父级的suites数组中
    if (parent instanceof Suite) {
      parent.suites.push(this);
    }
  }
}
module.exports = Suite;
