// 让 node 支持 ES module

// commonJS
// 加载：require()
// 输出：module.exports / exports.x

// ES module
// 加载：import xxx
// 输出：export / export default
import path from "path";
import { exists } from "./utils";

console.log(path.resolve("./"));
console.log(exists(path.resolve("./")));

(async function () {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("ok");
})();
