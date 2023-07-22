console.log("child process");
console.log("child pid:", process.pid);
process.on("message", (msg) => {
  console.log("child process:", msg);
});

process.send("this is child process msg");
