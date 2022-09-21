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
