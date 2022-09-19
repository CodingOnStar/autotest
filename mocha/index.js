/*
 * @Author: CodingOnStar
 * @Date: 2022-09-19 20:46:01
 * @Last Modified time: 2022-09-19 20:46:01
 * Entry file
 * 整体实现为树结构，测试用例的执行过程遵循从外到里、从上到下的顺序。
 * 对于describe和it的回调处理，也是一个树形结构，即深度优先的遍历顺序
 *
 * 整体流程为：
 * 1.收集用例（通过Suite和Test类来构造整棵树）
 * 2.执行用例（遍历树，执行所有用例函数）
 * 3.收集测试用例的执行结果
 */

import Mocha from "./src/mocha";

const mocha = new Mocha();
mocha.run();
