import Suite from "./suite";
import BDD from "../interfaces";
class Mocha {
  constructor() {
    // 创建根节点
    this.rootSuite = new Suite(null, "BDD");
    BDD(global, this.rootSuite);
    // 写死本地的测试用例文件夹地址
    const spec = path.resolve(__dirname, "../../test");
    const files = utils.findCaseFile(spec);
    // 加载测试用例
    files.forEach((file) => require(file));
  }
  run() {}
}
module.exports = Mocha;
