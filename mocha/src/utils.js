const path = require("path");
const fs = require("fs");

/**
 *
 * @param { * } filepath 文件或是文件夹路径
 * @returns 所有测试文件路径数组
 */
module.exports.findCaseFile = function (filepath) {
  function readFileList(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach((item, _) => {
      var fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        readFileList(path.join(dir, item), fileList); // 递归读取文件
      } else {
        fileList.push(fullPath);
      }
    });
    return fileList;
  }
  const fileList = [];
  try {
    const stat = fs.statSync(filepath);
    if (stat.isFile()) {
      fileList = [filepath];
      return fileList;
    }
    readFileList(filepath, fileList);
  } catch (e) {
    console.log(e);
  }
};
// mocha支持异步代码的编写，异步代码的支持需要内部实现一个Promise适配器，将所有的测试用例所在的回调函数包裹在适配器里面
module.exports.adaptPromise = function (fn) {
  return () =>
    new Promise((resolve) => {
      if (fn.length === 0) {
        try {
          const ret = fn();
          // 判断是否返回promise
          if (ret instanceof Promise) {
            return ret.then(resolve, resolve);
          } else {
            resolve();
          }
        } catch (error) {
          resolve(error);
        }
      } else {
        // 使用done参数
        function done(error) {
          resolve(error);
        }
        fn(done);
      }
    });
};
