const cp = require("node:child_process");
const path = require("path");
// cp.exec(path.resolve(__dirname, "test.shell"), function (err, stdout, stderr) {
//   console.log("err:", err);
//   console.log("stdout:", stdout);
//   console.log("stderr:", stderr);
// });

// const child = cp.spawn("npm", ["install"], {
//   cwd: path.resolve("E:/product/lingfeng-cli/lingfeng-cli"),
//   shell: true,
// });

// child.stdout.on("data", function (chunk) {
//   console.log("stdout:", chunk.toString());
// });
// child.stderr.on("data", function (chunk) {
//   console.log("stderr:", chunk.toString());
// });

const child = cp.fork(path.resolve(__dirname, "child.js"));
console.log("main pid:", process.pid);
child.send("this is main process msg", () => {
  // child.disconnect();
});

child.on("message", (msg) => {
  console.log("main process:", msg);
});
